import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { Ng2Auth0DemoAppRoutingModule } from './app.router'

import { Auth } from './services/auth.service'
import { AUTH_PROVIDERS }  from 'angular2-jwt';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2Auth0DemoAppRoutingModule
  ],
  providers: [AUTH_PROVIDERS,Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
