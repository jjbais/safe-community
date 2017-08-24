import { Injectable } from '@angular/core';

import { DatabaseService } from './database.service';
import { Admin } from 'app/models/admin';

@Injectable()
export class AuthService {
  ADMINS: Admin[] = [];

  isLoggedIn: boolean;

  constructor(public db: DatabaseService) {
    this.ADMINS = db.ADMINS;
    this.isLoggedIn = false;
  }

}
