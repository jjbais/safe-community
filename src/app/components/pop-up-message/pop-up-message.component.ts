import { Component, OnInit, Inject} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-pop-up-message',
  templateUrl: './pop-up-message.component.html',
  styleUrls: ['./pop-up-message.component.css']
})
export class PopUpMessageComponent implements OnInit {
  message: string;

  constructor(@Inject(MD_DIALOG_DATA) public data: any) {
    this.message = '';
  }

  ngOnInit() {
    this.message = this.data;
  }

}
