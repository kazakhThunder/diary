import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-fill-entry',
  templateUrl: './fill-entry.component.html',
  styleUrls: ['./fill-entry.component.css']
})
export class FillEntryComponent implements OnInit {

entryForm = new FormGroup({
  entry: new FormControl(),
  date: new FormControl(new Date()),
  title: new FormControl(),
  author: new FormControl(localStorage.getItem('username'))
});

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {

  }

  ngOnInit() {
  }

  submit(form: NgForm) {
    const data = Object.assign(this.entryForm.value);
    let li=null;
    if (data.entry === null || data.entry.length < 1) {
      li = document.createElement('li');
      li.innerText = 'Entry is required.';
      document.getElementById('errors').appendChild(li);
    }
    if (li !== null) {   return false;
    }
    document.getElementById('errors').innerHTML='';
    this.http.post('/api/entries/fillEntry', data).subscribe(() => {
      console.log('Post request successful');
    }, error => {
      console.log('error');
    });

    Swal.fire({ icon: 'success',
     title: 'Entry saved',
     text: 'Wish to create another entry?',
     showCloseButton: true,
     showCancelButton: true,
     confirmButtonText:
    'Yes',
  cancelButtonText:
    'No'
    }).then((result) => {
      if (!result.value) {
        this.router.navigate(['/home']);
      } else {
        this.entryForm.setValue({entry: '', date: this.entryForm.value.date, title: '', author: this.entryForm.value.author});
      }
    });
  }
}
