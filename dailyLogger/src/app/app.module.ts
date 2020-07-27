import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FillEntryComponent } from './fill-entry/fill-entry.component';
import { AuthGuard } from './guards/auth.guard';
import { ViewEntryComponent } from './view-entry/view-entry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserLogComponent } from './user-log/user-log.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { UserRegisterComponent } from './user-register/user-register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    FillEntryComponent,
    ViewEntryComponent,
    UserLogComponent,
    UserRegisterComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    SweetAlert2Module.forRoot(),
    SidebarModule.forRoot(),
    HttpModule,
    FlashMessagesModule.forRoot(),
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatSidenavModule,
    MatDatepickerModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
