import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  regForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    age: new FormControl(),
    username: new FormControl(),
    password: new FormControl()
  });
  constructor(private http: HttpClient, private router: Router) { }
  get name() { return this.regForm.get('name'); }
  ngOnInit(): void {
  }

   register() {
    const data = Object.assign(this.regForm.value);
    let li = null;
    document.getElementById('errors').innerHTML = '';
    if (data.name === null ) {
      li = document.createElement('li');
      li.innerText = 'Name is required';
      document.getElementById('errors').appendChild(li);
    }
    if (data.age < 13 ) {
      li = document.createElement('li');
      li.innerText = 'Age needs to be more than 13';
      document.getElementById('errors').appendChild(li);
    }
    if (data.username == null ) {
      li = document.createElement('li');
      li.innerText = 'Username is required';
      document.getElementById('errors').appendChild(li);
    }
    if (data.password === null || data.password.length < 8) {
      li = document.createElement('li');
      li.innerText = 'Password must have atleast 8 characters';
      document.getElementById('errors').appendChild(li);
    }
    if (li !== null) {   return false;
    }
    this.http.post('api/users/register', data).subscribe((res) => {
      if (res === 0) {
        li = document.createElement('li');
        li.innerText = 'Username already taken.';
        document.getElementById('errors').innerHTML = '';
        document.getElementById('errors').appendChild(li);
        return false;
      }
      this.router.navigate(['../login']);
    }, error => {
      console.log(error);
    });
  }
}
