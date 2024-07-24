import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewDynmicService } from '../services/new-dynmic.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-dynmic-page',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './dynmic-page.component.html',
  styleUrl: './dynmic-page.component.css'
})
export class DynmicPageComponent implements OnInit {
  section: string | null = '';
  items: any[] = [];
  itemsToShow: number = 6;

  constructor(
    private route: ActivatedRoute, 
    private dynmicService: NewDynmicService
  ) {}

  ngOnInit(): void {
    // Subscribe to route parameters to get the current section
    this.route.paramMap.subscribe(params => {
      this.section = params.get('section');
      if (this.section) {
        this.fetchMenuItems(this.section, this.itemsToShow);
      }
    });
  }

  /**
   * Fetches menu items from the API based on the section and number of items to show
   * @param section The section name
   * @param itemsToShow The number of items to fetch
   */
  fetchMenuItems(section: string, itemsToShow: number): void {
    this.dynmicService.getMenuItems(section, itemsToShow).subscribe(
      data => {
        this.items = data; // Assuming the API returns an array of items
        console.log('Menu items:', this.items);
      },
      error => {
        console.error('Error fetching menu items:', error);
      }
    );
  }

  /**
   * Loads more items by increasing the itemsToShow value
   */
  loadMore(): void {
    this.itemsToShow += 5;
    this.fetchMenuItems(this.section!, this.itemsToShow);
  }
}
