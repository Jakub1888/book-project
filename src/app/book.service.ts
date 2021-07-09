import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './Book-list/book';
import { BOOKS } from './Book-list/mock-books';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  getBooks(): Observable<Book[]> {
    const books = of(BOOKS);
    return books;
  }

  getBook(id: number): Observable<Book> {
    const book = BOOKS.find((b) => b.id === id)!;
    return of(book);
  }
}
