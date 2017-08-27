import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(public auth: AuthService) {
  }

  ngOnInit() {
  }

  logIn() {
    if (this.username && this.password) {
      this.auth.logIn(this.username, this.password);
    }
  }

}
