import { Component, OnInit } from '@angular/core';
import { LoggedInService } from '../logged-in.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loggedInService: LoggedInService) { }

  ngOnInit() {
  }
logout() {
  this.loggedInService.logout();
}
}
