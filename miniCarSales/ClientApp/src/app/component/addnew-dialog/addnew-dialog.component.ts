import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Car } from '../../models/Car';
import { CarsService } from '../../service/cars.service';
import { HubService } from '../../service/hub.service';

@Component({
  selector: 'app-addnew-dialog',
  templateUrl: './addnew-dialog.component.html',
  styleUrls: ['./addnew-dialog.component.css']
})
export class AddnewDialogComponent implements OnInit {

    private vehicleType = "car";

    private makeControl = new FormControl('', [
        Validators.required
    ]);

    private modelControl = new FormControl('', [
        Validators.required
    ]);

    private addNewForm = this.fb.group({
        make: this.makeControl,
        model: this.modelControl
    });

    private _hubSrv: HubService;

    constructor(
        private fb: FormBuilder,
        private _carsSrv: CarsService,
        private _dialogRef: MatDialogRef<AddnewDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: HubService
    ) {
        this._hubSrv = data;
    }

    ngOnInit() {
    }

    onClickAdd() {

        this.addNewForm.markAllAsTouched();

        if (this.addNewForm.valid) {
            switch (this.vehicleType) {
                case "car":
                    this.addNewCar();
                    break;
            }
            this._dialogRef.close();
        }

    }

    addNewCar() {
        let newCar = new Car();
        newCar.make = this.makeControl.value;
        newCar.model = this.modelControl.value;
        newCar.vehicleType = this.vehicleType;
        //this._carsSrv.addNew(newCar);
        this._hubSrv.sendData("AddNewVehicle", newCar);
    }
}
