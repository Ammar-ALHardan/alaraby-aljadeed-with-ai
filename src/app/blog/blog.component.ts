import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  bolgItems: any[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getMenuItems().subscribe(data => {
      console.log('API response:', data);
      this.bolgItems = data.slice(0, -1); // All items except the last one
    }, error => {
      console.error('Error fetching menu items:', error);
    });
  }
}
