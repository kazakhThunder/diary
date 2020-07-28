import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggedInService {

  constructor(private router: Router) {
    console.log('Logged in Initialized...');
    window.onbeforeunload = () => {
      // localStorage.clear();
      // return 'Are you sure?';
    };
  }

 logout() {
  localStorage.setItem('isLoggedIn', 'false');
  }
}
