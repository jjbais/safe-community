import { Component, OnInit } from '@angular/core';
import { Log } from 'app/models/log';
import { DatabaseService } from 'app/services/database.service';

@Component({
  selector: 'app-datalogs',
  templateUrl: './datalogs.component.html',
  styleUrls: ['./datalogs.component.css']
})
export class DatalogsComponent implements OnInit {
  logs: Log[];
  adminLogs: Log[];
  triggerLogs: Log[];
  dataLogs: Log[];

  constructor(public db: DatabaseService) {
    this.adminLogs = db.LOGS.filter((log: Log) => log.type === 'admin');
    this.triggerLogs = db.LOGS.filter((log: Log) => log.type === 'trigger');
    this.dataLogs = db.LOGS.filter((log: Log) => log.type === 'data');
  }

  ngOnInit() {
  }

}
