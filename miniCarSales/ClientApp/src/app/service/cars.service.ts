import { Injectable } from '@angular/core';
import { Car } from '../models/Car';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private _cars: BehaviorSubject<Car[]> = new BehaviorSubject(null);
  public cars: Observable<Car[]> = new Observable();

  constructor() {
    this.cars = this._cars.asObservable();
  }

  initCollection(data: Car[]) {
    this._cars.next(data);
    console.log(this._cars);
  }
}
