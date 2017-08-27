import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { Admin } from 'app/models/admin';
import { Router } from '@angular/router';
import { DialogService } from 'app/services/dialog.service';

@Injectable()
export class AuthService {
  ADMINS: Admin[] = [];

  admin: Admin;

  constructor(public router: Router, public db: DatabaseService, public dialog: DialogService) {
    this.ADMINS = db.ADMINS;
  }

  logIn(username: string, password: string) {
    const loggedAdmin = this.ADMINS.find((admin: Admin) => admin.username === username && admin.password === password);
    if (loggedAdmin) {
      localStorage.setItem('currentUser', JSON.stringify(loggedAdmin));
      this.router.navigateByUrl('/home');
    }else {
      localStorage.removeItem('currentUser');
      this.dialog.popUp('Username/Password is incorrect.');
    }
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/login');
  }

}
