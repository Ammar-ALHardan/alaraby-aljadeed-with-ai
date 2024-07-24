import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent implements OnInit {
  blogDetail: any;
  nid!: string | null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.nid = params.get('nid');
      this.fetchBlogDetail();
    });
  }

  fetchBlogDetail(): void {
    const apiUrl = `https://corsproxy.io/?https://www.alaraby.co.uk/mobile-app/blogs/blog/${this.nid}`;
    this.http.get(apiUrl).subscribe((data: any) => {
      this.blogDetail = data;
    });
  }
}
