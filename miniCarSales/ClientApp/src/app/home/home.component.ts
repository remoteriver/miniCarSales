import { Component, OnInit } from '@angular/core';
import { HubService } from '../service/hub.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddnewDialogComponent } from '../component/addnew-dialog/addnew-dialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

    constructor(public _dialog: MatDialog) {

  }

  ngOnInit() {
    }

    addNewCar() {
        const dialogRef = this._dialog.open(AddnewDialogComponent, {
            width: 'auto',
            data: { }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
