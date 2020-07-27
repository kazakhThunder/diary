import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-entry',
  templateUrl: './view-entry.component.html',
  styleUrls: ['./view-entry.component.css'],
})
export class ViewEntryComponent implements OnInit {
  list = [];
  date = new Date();
  received: boolean;
  selected = 0;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

 showThis(event) {
  const target = event.target || event.srcElement || event.currentTarget;
  const idAttr = target.attributes.id;
  this.selected = idAttr.value;
  // document.getElementById('entry').innerText = this.list[idAttr.value].value.entry;
  // document.getElementById('dt').innerText = this.list[idAttr.value].value.date;
  // document.getElementById('ttle').innerText = this.list[idAttr.value].value.title;
}

  ngOnInit() {
    this.http.get('/api/v1/users').subscribe(
      (data) => {
        const stringData = String(data);
        const servResponse = JSON.parse(stringData);
        for (let i = 0; i < servResponse.length; i++) {
          if (servResponse[i].value == null) { continue; }
          this.list.push({ key: i, value: servResponse[i].value });
        }
        console.log(this.list);
        if (this.list.length > 0) {
          this.received = true; }
      },
      (error) => {
        console.log('error');
      }
    );
  }
}
