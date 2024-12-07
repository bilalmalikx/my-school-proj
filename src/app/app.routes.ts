import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { OurmissionComponent } from './component/ourmission/ourmission.component';
import { OurvisionComponent } from './component/ourvision/ourvision.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'our-mission', component: OurmissionComponent },
  { path: 'our-vision', component: OurvisionComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: 'contact-us', component: ContactusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];


export class AppRoutingModule { }
