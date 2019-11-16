import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { PageNoFoundComponent } from './components/shared/page-no-found/page-no-found.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { PagesComponent } from './components/pages/pages.component';
import { HomeComponent } from './components/home/home.component';


const appRoutes: Routes = [
  {path: 'index', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  },
  {path: '**', component: PageNoFoundComponent}
];

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot( appRoutes, {useHash: true} );
