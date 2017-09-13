import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User;
  types = [
    'resident',
    'mobile'
  ];

  constructor() { }

  ngOnInit() {
    this.user = new User;
  }

}
