import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'app/services/database.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {
  deviceId: number;

  constructor(public db: DatabaseService) { }

  ngOnInit() {
  }

  addDevice() {
    if (this.deviceId) {
      this.db.addDevice(this.deviceId);
    }
  }

}
