import { Component, OnInit } from '@angular/core';
import { MenuService } from '../shared/services/menu.service';
import { Book } from '../shared/interfaces/book.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  books: Book[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.fetchMenuData();
  }

  fetchMenuData(): void {
    this.menuService.getMenuData().subscribe((data: Book[]) => {
      this.books = data;
      console.log(this.books);
    });
  }

}
