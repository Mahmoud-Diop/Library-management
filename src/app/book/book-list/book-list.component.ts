import { Component, NgModule, OnInit } from '@angular/core';
import { BookService } from '../../services/book/book.service';
import { Observable } from 'rxjs';
import { Book } from '../model/Book';
import { BookItemComponent } from '../book-item/book-item.component';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  imports: [BookItemComponent,AsyncPipe,CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {
  books$!: Observable<Book[]> ;
  constructor(private bookService: BookService) { 
  }

  ngOnInit(): void {
    this.books$ = this.bookService.getBooks()
  }
}
