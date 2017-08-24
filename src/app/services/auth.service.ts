import { Injectable } from '@angular/core';

import { DatabaseService } from './database.service';
import { Admin } from 'app/models/admin';

@Injectable()
export class AuthService {
  ADMINS: Admin[] = [];

  admin: Admin;
  isLoggedIn: boolean;

  constructor(public db: DatabaseService) {
    this.ADMINS = db.ADMINS;
    this.isLoggedIn = false;
  }

  logIn(username: string, password: string) {
    const loggedAdmin = this.ADMINS.find((admin: Admin) => admin.username === username && admin.password === password);
    if (loggedAdmin) {
      localStorage.setItem('currentUser', JSON.stringify(loggedAdmin));
      this.isLoggedIn = true;
    }else {
      localStorage.removeItem('currentUser');
      this.isLoggedIn = false;
    }
  }

  logOut() {
    localStorage.removeItem('currentUser');
  }

}
