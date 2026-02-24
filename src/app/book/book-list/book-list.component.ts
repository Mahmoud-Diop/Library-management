import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book/book.service';
import { Observable } from 'rxjs';
import { Book } from '../model/Book';

@Component({
  selector: 'app-book-list',
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {
  books$!: Observable<Book[]> ;
  constructor(private bookService: BookService) { 
  }

  ngOnInit(): void {
    this.books$ = this.bookService.getBooks()
    this.books$.subscribe(books => console.log(books));
  }
}
