import { Injectable } from '@angular/core';
import { Car } from '../models/Car';
import { BehaviorSubject, Observable } from 'rxjs';
import { HubService } from './hub.service';
import { Make } from '../models/Make';
import { MatSelectionListChange, MatListOption } from '@angular/material/list';
import { SelectionModel } from '@angular/cdk/collections';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private carsCollection: Car[] = [];

  private selectedMakes: string[] = [];

  private _cars: BehaviorSubject<Car[]> = new BehaviorSubject(null);
    public cars: Observable<Car[]> = new Observable();

    private _makes: BehaviorSubject<Make[]> = new BehaviorSubject(null);
    public makes: Observable<Make[]> = new Observable();

    constructor() {
        this.cars = this._cars.asObservable();
        this.makes = this._makes.asObservable();
  }

  getVehicleCollection(data: Car[]) {
    this.carsCollection = data;
    this.filterCarsList();
    console.log(this.carsCollection);
    }

    getVehicleMakes(data: Make[]) {
        this._makes.next(data);
        console.log(this._makes);
  }

  onFilterChanged(selectedModel: SelectionModel<MatListOption>) {
    console.log('SelectionModel', selectedModel)
    this.selectedMakes = [];
    selectedModel.selected.forEach(option => this.selectedMakes.push(option.value));
    this.filterCarsList();
  }

  filterCarsList() {
    if (this.selectedMakes.length > 0)
      var filterd = this.carsCollection.filter(car => this.selectedMakes.includes(car.make));
    else
      var filterd = this.carsCollection;
    this._cars.next(filterd);
  }

}
