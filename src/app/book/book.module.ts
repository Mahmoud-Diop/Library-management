import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-item/book-item.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookRoutingModule,
    BookListComponent,
    BookItemComponent
  ]
})
export class BookModule { }
