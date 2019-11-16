import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PagesComponent } from './components/pages/pages.component';

// Routes
import { APP_ROUTES } from 'src/app/app.routes';

// Shared
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { PageNoFoundComponent } from './components/shared/page-no-found/page-no-found.component';

// Auth
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';

// Pages
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ControlSidebarComponent } from './components/shared/control-sidebar/control-sidebar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    PageNoFoundComponent,
    PagesComponent,
    DashboardComponent,
    ControlSidebarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
