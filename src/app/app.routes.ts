import { Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { BookListComponent } from './book/book-list/book-list.component';
import { HomeComponent } from './landing-page/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'books', loadChildren: () => import('./book/book.module').then(m => m.BookModule) },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'admin', component: AdminPageComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: 'home' }

]
