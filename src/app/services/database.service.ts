import { Injectable } from '@angular/core';

import { Admin } from 'app/models/admin';
import { User } from 'app/models/user';
import { Device } from 'app/models/device';
import { Log } from 'app/models/log';

@Injectable()
export class DatabaseService {
  ADMINS: Admin[] = [];
  USERS: User[] = [];
  DEVICES: Device[] = [];
  ALERTS: User[] = [];
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
      this.ADMINS.splice(this.ADMINS.indexOf(removeAdmin));
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
      this.USERS.splice(this.USERS.indexOf(removeUser));
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
      this.DEVICES.splice(this.DEVICES.indexOf(removeDevice));
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
      this.ALERTS.splice(this.ALERTS.indexOf(removeAlert));
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
