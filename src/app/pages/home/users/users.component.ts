import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';
import { Admin } from 'app/models/admin';
import { DatabaseService } from 'app/services/database.service';
import { DialogService } from 'app/services/dialog.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  admins: Admin[];

  constructor(public db: DatabaseService, public dialog: DialogService) {
    this.users = db.USERS;
    this.admins = db.ADMINS;
  }

  ngOnInit() {
  }

  openDialogAddAdmin() {
    this.dialog.addAdmin();
  }

  openDialogAddUser() {
    this.dialog.addUser();
  }

}
