import { Injectable } from '@angular/core';
import { Car } from '../models/Car';
import { BehaviorSubject, Observable } from 'rxjs';
import { HubService } from './hub.service';
import { Make } from '../models/Make';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private _cars: BehaviorSubject<Car[]> = new BehaviorSubject(null);
    public cars: Observable<Car[]> = new Observable();

    private _makes: BehaviorSubject<Make[]> = new BehaviorSubject(null);
    public makes: Observable<Make[]> = new Observable();

    constructor() {
        this.cars = this._cars.asObservable();
        this.makes = this._makes.asObservable();
  }

  getVehicleCollection(data: Car[]) {
    this._cars.next(data);
    console.log(this._cars);
    }

    getVehicleMakes(data: Make[]) {
        this._makes.next(data);
        console.log(this._makes);
    }

}
