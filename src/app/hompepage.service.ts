import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HompepageService {
  private apiUrl = 'https://corsproxy.io/?https://www.alaraby.co.uk/mobile-app-v2/listing/news/20/1';

  constructor(private http: HttpClient) { }

  getMenuItems(): Observable<any> {
    console.log('Fetching menu items from API...');
    return this.http.get(this.apiUrl);
  }
}
