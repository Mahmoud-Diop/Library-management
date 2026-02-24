import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../../book/model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  api:string = "http://localhost:8000/books";




  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get<Book[]>(this.api);
  }
}
