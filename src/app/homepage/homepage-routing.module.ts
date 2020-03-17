import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../auth/auth.guard';
import { NotLoggedInComponent } from './not-loggedIn/not-logged-in.component';
import { LoggedInComponent } from './loggedIn/logged-in.component';



const routes: Routes = [
  { path: 'welcome', component: NotLoggedInComponent },
  { path: 'home', component: LoggedInComponent , canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
