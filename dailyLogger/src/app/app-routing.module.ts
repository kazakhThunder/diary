import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewEntryComponent } from './view-entry/view-entry.component';
import { FillEntryComponent } from './fill-entry/fill-entry.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserLogComponent } from './user-log/user-log.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
{ path: 'home', component: NavbarComponent, canActivate : [AuthGuard], children: [
  { path: '', component: HomePageComponent},
  { path: 'view', component: ViewEntryComponent},
  { path: 'fill', component: FillEntryComponent}
]},
{ path: '', component: LandingPageComponent, children: [
  { path: 'login', component: UserLogComponent},
  { path: 'register', component: UserRegisterComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SweetAlert2Module.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
