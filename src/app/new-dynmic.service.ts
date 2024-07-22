import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewDynmicService {
  private apiUrl = 'https://corsproxy.io/?https://www.alaraby.co.uk/mobile-app-v2/listing';

  constructor(private http: HttpClient) { }

  /**
   * Fetches menu items from the API
   * @param sectionName The name of the section
   * @param numbers The number of items to fetch
   * @returns Observable containing the menu items
   */
  getMenuItems(sectionName: string, numbers: number): Observable<any> {
    const url = `${this.apiUrl}/${sectionName}/${numbers}/1`;
    console.log(`Fetching menu items from API: ${url}`);
    return this.http.get(url);
  }
}
