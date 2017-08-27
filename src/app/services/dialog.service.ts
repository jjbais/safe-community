import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';
import { AddAdminComponent } from 'app/components/add-admin/add-admin.component';
import { AddDeviceComponent } from 'app/components/add-device/add-device.component';
import { AddUserComponent } from 'app/components/add-user/add-user.component';
import { PopUpMessageComponent } from 'app/components/pop-up-message/pop-up-message.component';

@Injectable()
export class DialogService {

  constructor(public dialog: MdDialog) { }

  addAdmin() {
    this.dialog.open(AddAdminComponent);
  }

  addDevice() {
    this.dialog.open(AddDeviceComponent);
  }

  addUser() {
    this.dialog.open(AddUserComponent);
  }

  popUp(message: string) {
    this.dialog.open(PopUpMessageComponent, {
      data: message,
    });
  }

  closeAll() {
    this.dialog.closeAll();
  }

}
