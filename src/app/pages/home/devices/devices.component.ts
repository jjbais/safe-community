import { Component, OnInit } from '@angular/core';
import { Device } from 'app/models/device';
import { User } from 'app/models/user';
import { DatabaseService } from 'app/services/database.service';
import { MqttService } from 'app/services/mqtt.service';
import { DialogService } from 'app/services/dialog.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  users: User[];
  user: User;
  devices: Device[];
  deviceId: number;

  constructor(public db: DatabaseService, public mqtt: MqttService, public dialog: DialogService) {
    this.users = db.USERS;
    this.user = new User;
    this.devices = db.DEVICES;
  }

  ngOnInit() {
  }

  addDevice(deviceId: number) {
    this.db.addDevice(deviceId);
  }

  triggerOff(deviceId: number) {
    this.mqtt.triggerOff(deviceId);
  }

  openDialogAddDevice() {
    this.dialog.addDevice();
  }

  getUser(deviceId: number): User {
    return this.users.find((user: User) => user.deviceId === deviceId);
  }
}
