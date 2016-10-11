import { NgModule } from '@angular/core';
import { Routes,Route, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const indexRoutes: Route = {
        path: '', component: HomeComponent 
    }
    
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  indexRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class Ng2Auth0DemoAppRoutingModule { }
