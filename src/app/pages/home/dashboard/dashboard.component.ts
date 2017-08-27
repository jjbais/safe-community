import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'app/services/database.service';
import { MqttService } from 'app/services/mqtt.service';
import { User } from 'app/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  alerts: User[];

  lat = 14.5622;
  lng = 120.5947;
  zoom = 15;

  constructor(public db: DatabaseService, public mqtt: MqttService) {
    this.alerts = db.ALERTS;
  }

  ngOnInit() {
  }

  dismiss(deviceId: number) {
    this.mqtt.triggerOff(deviceId);
  }

  centerCamera(lat: number, lng: number) {
  }

}
