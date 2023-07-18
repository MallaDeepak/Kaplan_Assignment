import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, filter } from 'rxjs/operators';
import { Book } from '../interfaces/book.model';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep';

  constructor(private http: HttpClient) { }

  getMenuData(): Observable<Book[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response: any) => {
        const filteredItems = response.items.filter((item: any) => item.kind === 'books#volume');
        const books: Book[] = filteredItems.map((item: any) => ({
          authors: item.volumeInfo.authors,
          publisher: item.volumeInfo.publisher,
          title: item.volumeInfo.title,
          publishedDate: item.volumeInfo.publishedDate
        }));
        return books;
      }),
      catchError((error: any) => {
        // Handle the error and return an observable with the error message
        console.error('Error occurred while fetching menu data:', error);
        return throwError('Error occurred while fetching menu data. Please try again later.');
      })
    );
  }
}
