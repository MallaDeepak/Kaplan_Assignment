import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../menu/book.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getMenuData(): Observable<Book[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response: any) => {
        const books: Book[] = [];
        for (let i = 0; i < response.items.length; i++) {
          const item = response.items[i];
          if (item.kind === 'books#volume') {
            const book: Book = {
              authors: item.volumeInfo.authors,
              publisher: item.volumeInfo.publisher,
              title: item.volumeInfo.title,
              publishedDate: item.volumeInfo.publishedDate
            };
            books.push(book);
          }
        }
        return books;
      })
    );
  }
}
