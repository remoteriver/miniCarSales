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

    private vehicleType = "Car";

    private makeControl = new FormControl('', [
        Validators.required
    ]);

    private modelControl = new FormControl('', [
        Validators.required
  ]);

  private engineControl = new FormControl('', [
  ]);
  private doorsControl = new FormControl(4, [
  ]);
  private wheelsControl = new FormControl(4, [
  ]);

    private addNewForm = this.fb.group({
        make: this.makeControl,
      model: this.modelControl,
      engine: this.engineControl,
      doors: this.doorsControl,
      wheels: this.wheelsControl,
    });

    constructor(
        private fb: FormBuilder,
        private _carsSrv: CarsService,
        private _hubSrv: HubService,
        private _dialogRef: MatDialogRef<AddnewDialogComponent>
    ) {
    }

    ngOnInit() {
    }

    onClickAdd() {

        this.addNewForm.markAllAsTouched();

        if (this.addNewForm.valid) {
            switch (this.vehicleType) {
                case "Car":
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
        newCar.engine = this.engineControl.value;
        newCar.wheels = this.wheelsControl.value;
        newCar.doors = this.doorsControl.value;
        newCar.model = this.modelControl.value;
        newCar.bodyType = this.vehicleType;
        this._hubSrv.sendData("AddNewVehicle", newCar);
    }
}
