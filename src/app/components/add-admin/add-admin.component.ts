import { Component, OnInit } from '@angular/core';
import { Admin } from 'app/models/admin';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  admin: Admin = new Admin();

  constructor() { }

  ngOnInit() {
  }

}
