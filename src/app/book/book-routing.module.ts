import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { LoginComponent } from '../login/login.component';
import { AdminPageComponent } from '../admin-page/admin-page.component';
import { BookItemComponent } from './book-item/book-item.component';

const routes: Routes = [
  { path: '',component: BookListComponent },
  {path :':id', component: BookItemComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
