import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.css']
})
export class UserLogComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {}

  login() {
    const data = Object.assign(this.loginForm.value);
    let li = null;
    document.getElementById('errors').innerHTML = '';
    if (data.username == null || data.username.length < 1 ) {
      li = document.createElement('li');
      li.innerText = 'Username is required';
      document.getElementById('errors').appendChild(li);
    }
    if (data.password === null || data.password.length < 1) {
      li = document.createElement('li');
      li.innerText = 'Password is required.';
      document.getElementById('errors').appendChild(li);
    }
    if (li !== null) {   return false;
    }
    this.http.post('api/users/login', data).subscribe((recData: any) => {
        this.router.navigate(['../home']);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('name', recData.name );
        localStorage.setItem('username', recData.username);
    }, error => {
        li = document.createElement('li');
        li.innerText = 'Username or password is incorrect';
        document.getElementById('errors').appendChild(li);
    });
  }
}
