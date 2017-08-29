import { Injectable } from '@angular/core';

import { DatabaseService } from './database.service';
import { Device } from 'app/models/device';
import * as mqtt from 'mqtt';

@Injectable()
export class MqttService {
  connectionType: string;
  url: string;
  port: string;
  brokerUrl: string;
  client: mqtt.Client;
  isConnected: boolean;
  rootTopic: string;

  constructor(public db: DatabaseService) {
    this.connectionType = 'ws';
    this.url = 'safe.local'; // safe.local, iot.eclipse.org
    this.port = '1884';          // 1884, 80/ws

    this.brokerUrl = this.connectionType + '://' + this.url + ':' + this.port;
    this.isConnected = false;
    this.rootTopic = 'community/';

    this.connect(this.brokerUrl);

    this.client.on('connect', () => {
      this.onConnect();
    });
    this.client.on('message', (topic, message) => {
      this.onMessage(topic, message.toString());
    });
  }

  connect(brokerUrl: string) {
    this.client = mqtt.connect(brokerUrl);
  }

  disconnect() {
    this.client.end();
    this.isConnected = this.client.connected;
  }

  onConnect() {
    this.client.subscribe(this.rootTopic + '#');
    this.isConnected = this.client.connected;
  }

  onMessage(topic: string, payload: string) {
    const userType = topic.split('/')[1];
    const payloadType = topic.split('/')[2];
    const deviceId = topic.split('/')[3];

    if (userType === 'resident') {
      this.db.updateDevice(Number.parseInt(deviceId), payloadType, payload);
    }
    // console.log(userType + ':' + payloadType + ':' + deviceId + ':' + payload);
  }

  publish(topic: string, payload: string) {
    this.client.publish(this.rootTopic + topic, payload, {qos: 0, retain: true, dup: false});
  }

  triggerOff(deviceId: number) {
    const topic = 'resident/trigger/' + deviceId.toString() + '/';
    const payload = '0';
    this.publish(topic, payload);
  }
}
