import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../model/Book';

@Component({
  selector: 'app-book-item',
  imports: [],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss'
})
export class BookItemComponent implements OnInit {

   @Input() book!: Book;

  ngOnInit(): void {
    console.log(this.book);
  }

}
