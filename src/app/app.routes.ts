import { Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirection vers login
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'admin', component: AdminPageComponent ,canActivate:[AuthGuard]}
];
