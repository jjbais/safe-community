import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';
import { AddAdminComponent } from 'app/components/add-admin/add-admin.component';
import { AddUserComponent } from 'app/components/add-user/add-user.component';
import { PopUpMessageComponent } from 'app/components/pop-up-message/pop-up-message.component';
import { DatabaseService } from 'app/services/database.service';

@Injectable()
export class DialogService {

  constructor(public dialog: MdDialog, public db: DatabaseService) { }

  addAdmin() {
    const dialogRef = this.dialog.open(AddAdminComponent, {
      width: '30%',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null || result !== '') {
        this.db.addAdmin(result);
      }
    });
  }

  addUser() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '30%',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null || result !== '') {
        this.db.addUser(result);
      }
    });
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
