import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { Admin } from 'app/models/admin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: Admin;

  constructor(public auth: AuthService) {
    this.currentUser = new Admin;
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  ngOnInit() {
  }

  logOut() {
    this.auth.logOut();
  }

}
