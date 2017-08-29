import { Injectable } from '@angular/core';

import { Admin } from 'app/models/admin';
import { User } from 'app/models/user';
import { Device } from 'app/models/device';
import { Log } from 'app/models/log';

@Injectable()
export class DatabaseService {
  ADMINS: Admin[] = [
    {
      id: 0,
      username: 'admin',
      password: 'admin',
      fullname: 'Administrator',
      mobile: '09279574701'
    }
  ];
  USERS: User[] = [
    {
      id: 0,
      deviceId: 0,
      lat: 14.563481,
      long: 120.591149,
      userType: 'resident',
      name: 'Angelo James',
      address: '0624 Reformista Street',
      mobile: '09287654234'
    },
    {
      id: 1,
      deviceId: 1,
      lat: 14.563188,
      long: 120.591134,
      userType: 'resident',
      name: 'Jerome Joseph',
      address: '0627 Reformista Street',
      mobile: '09287654234'
    }
  ];
  DEVICES: Device[] = [
    {
      id: 0,
      trigger: false,
      connection: false,
      payload: '',
      power: false,
      battery: 0
    },
    {
      id: 1,
      trigger: false,
      connection: false,
      payload: '',
      power: false,
      battery: 0
    }
  ];
  ALERTS: User[] = [{
    id: 0,
    deviceId: 0,
    lat: 14.563481,
    long: 120.591149,
    userType: 'resident',
    name: 'Angelo James',
    address: '0624 Reformista Street',
    mobile: '09287654234'
  }];
  LOGS: Log[] = [];

  constructor() {
  }

  addAdmin(addAdmin: Admin) {
    const duplicate = this.ADMINS.find((admin: Admin) => admin.id === addAdmin.id);
    if (!duplicate) {
      addAdmin.id = this.ADMINS[this.ADMINS.length - 1].id + 1;
      this.ADMINS.push(addAdmin);
    }
  }

  updateAdmin() {

  }

  deleteAdmin(adminId: number) {
    const removeAdmin = this.ADMINS.find((admin: Admin) => admin.id === adminId);
    if (removeAdmin) {
      this.ADMINS.splice(this.ADMINS.indexOf(removeAdmin), 1);
    }
  }

  addUser(addUser: User) {
    const duplicate = this.USERS.find((user: User) => user.id === addUser.id);
    if (!duplicate) {
      addUser.id = this.USERS[this.USERS.length - 1].id + 1;
      this.USERS.push(addUser);
    }
  }

  updateUser(updateUser: User) {

  }

  deleteUser(userId: number) {
    const removeUser = this.USERS.find((user: User) => user.id === userId);
    if (removeUser) {
      this.USERS.splice(this.USERS.indexOf(removeUser), 1);
    }
  }

  addDevice(deviceId: number) {
    const duplicate = this.DEVICES.find((device: Device) => device.id === deviceId);
    if (!duplicate) {
      const addDevice = new Device();
      addDevice.id = deviceId;
      this.DEVICES.push(addDevice);
    }
  }

  updateDevice(deviceId: number, payloadType: string, payload: string) {
    const updateDevice = this.DEVICES.find((device: Device) => device.id === deviceId);
    if (updateDevice) {
      if (payloadType === 'connection') {
        let value: boolean;
        if (payload === '1') {
          value = true;
        } else {
          value = false;
        }
        updateDevice.connection = value;
      } else if (payloadType === 'trigger') {
        console.log(this.ALERTS);
        let value: boolean;
        if (payload === '1') {
          value = true;
          this.addAlert(updateDevice.id);
        } else {
          value = false;
          this.removeAlert(updateDevice.id);
        }
        updateDevice.trigger = value;
      } else if (payloadType === 'message') {
        updateDevice.payload = payload;
      } else if (payloadType === 'battery') {
        if (payload === 'true') {
          updateDevice.power = true;
        } else if (payload === 'false') {
          updateDevice.power = false;
        } else {
          updateDevice.battery = Number.parseInt(payload);
        }
      }
    }
  }

  removeDevice(deviceId: number) {
    const removeDevice = this.DEVICES.find((device: Device) => device.id === deviceId);
    if (removeDevice) {
      this.DEVICES.splice(this.DEVICES.indexOf(removeDevice), 1);
    }
  }

  addAlert(deviceId: number) {
    const duplicate: User = this.ALERTS.find((alert: User) => alert.deviceId === deviceId);
    const addAlert: User = this.USERS.find((user: User) => user.deviceId === deviceId);
    if (addAlert && !duplicate) {
      this.ALERTS.push(addAlert);
    }
  }

  removeAlert(deviceId: number) {
    const removeAlert: User = this.ALERTS.find((alert: User) => alert.deviceId === deviceId);
    if (removeAlert) {
      this.ALERTS.splice(this.ALERTS.indexOf(removeAlert), 1);
    }
  }

  addLog(addLog: Log) {
    const duplicate = this.LOGS.find((log: Log) => log.id === addLog.id);
    if (!duplicate) {
      addLog.id = this.ADMINS[this.ADMINS.length - 1].id + 1;
      this.LOGS.push(addLog);
    }
  }
}
