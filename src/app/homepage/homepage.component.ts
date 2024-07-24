import { Component, OnInit } from '@angular/core';
import { HompepageService } from '../services/hompepage.service';
import { DatePipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgFor, DatePipe, NgIf],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [DatePipe]
})
export class HomepageComponent implements OnInit {
  items: any[] = [];
  displayedItems: any[] = [];
  itemsToShow: number = 6;

  constructor(private homePageService: HompepageService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.homePageService.getMenuItems().subscribe(data => {
      console.log('API response:', data);
      this.items = data.slice(0, -1); // All items except the last one
      this.loadItems();
    }, error => {
      console.error('Error fetching menu items:', error);
    });
  }

  loadItems(): void {
    this.displayedItems = this.items.slice(0, this.itemsToShow);
  }

  loadMore(): void {
    this.itemsToShow += 5;
    this.loadItems();
  }

  formatDate(date: string): string | null {
    return this.datePipe.transform(date, 'dd MMMM yyyy'); // Customize the format as needed
  }
}
