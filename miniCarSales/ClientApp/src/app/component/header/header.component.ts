import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HubService } from '../../service/hub.service';
import { AddnewDialogComponent } from '../addnew-dialog/addnew-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(
        private _hubSrv: HubService,
        private _dialog: MatDialog) { }

  ngOnInit() {
  }


    addNewCar() {
        const dialogRef = this._dialog.open(AddnewDialogComponent, {
            width: 'auto',
            data: this._hubSrv
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

}
