import { Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { BookListComponent } from './book/book-list/book-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },// Redirection vers login
    {path: 'home', component: BookListComponent} ,
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'admin', component: AdminPageComponent ,canActivate:[AuthGuard]}
];
