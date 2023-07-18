import { Component, OnInit } from '@angular/core';
import { MenuService } from '../shared/services/menu.service';
import { Book } from '../shared/interfaces/book.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  books$!: Observable<Book[]>;
  searchKey: string = '';

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks() {
    this.books$ = this.menuService.getMenuData().pipe(
      catchError((error: any) => {
        console.error('Error occurred while fetching menu data:', error);
        return throwError('Error occurred while fetching menu data. Please try again later.');
      })
    );
  }

  applyFilter(): void {
    this.books$ = this.menuService.getMenuData().pipe(
      map((books: Book[]) => {
        return books.filter(book =>
          book.title.toLowerCase().includes(this.searchKey.toLowerCase())
        );
      }),
      catchError((error: any) => {
        console.error('Error occurred while fetching menu data:', error);
        return throwError('Error occurred while fetching menu data. Please try again later.');
      })
    );
  }
  
  createNewBook(): void {
    this.books$ = this.menuService.getMenuData().pipe(
      map((books: Book[]) => {
        const customBook: Book = {
          authors: ['Custom Author'],
          publisher: 'Custom Publisher',
          title: 'Custom Book',
          publishedDate: '2022-01-01'
        };  
        return [...books, customBook];
      }),
      catchError((error: any) => {
        console.error('Error occurred while fetching menu data:', error);
        return throwError('Error occurred while fetching menu data. Please try again later.');
      })
    );
  }  

}
