import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/menu.service';
import { Book } from '../menu/book.model';

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
