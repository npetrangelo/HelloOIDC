import { Routes } from '@angular/router';
import { Login } from './login/login';
import { App } from './app';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: 'login',
    component: Login
  },
  {
    path: '',
    component: Home
  },
  {
    path: '**',
    redirectTo: ''  // redirect unknown routes to home
  }
];
