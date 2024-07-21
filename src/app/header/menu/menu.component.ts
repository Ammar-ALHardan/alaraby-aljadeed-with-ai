import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menuItems: any[] = [];
  socialLinks: any = {};
  menuOpen = false;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenuItems().subscribe(data => {
      console.log('API response:', data);
      this.menuItems = data.slice(0, -1); // All items except the last one
      this.socialLinks = data[data.length - 1].social_links; // Last item contains social_links
    }, error => {
      console.error('Error fetching menu items:', error);
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    console.log('Menu toggled:', this.menuOpen);
  }

}
