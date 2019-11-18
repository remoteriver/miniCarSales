import { Component, OnInit } from '@angular/core';
import { HubService } from '../../service/hub.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddnewDialogComponent } from '../addnew-dialog/addnew-dialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

    constructor(
        private _hubSrv: HubService
    ) {

  }

  ngOnInit() {
    }

}
