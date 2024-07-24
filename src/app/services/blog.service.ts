import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'https://corsproxy.io/?https://www.alaraby.co.uk/mobile-app/blogs';

  constructor(private http: HttpClient) { }

  getMenuItems(): Observable<any> {
    console.log('Fetching menu items from API...');
    return this.http.get(this.apiUrl);
  }
}
