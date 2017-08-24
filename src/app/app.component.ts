import { Component } from '@angular/core';

import { DatabaseService } from 'app/services/database.service';
import { MqttService } from 'app/services/mqtt.service';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public db: DatabaseService, public mqtt: MqttService, public auth: AuthService) { }
}
