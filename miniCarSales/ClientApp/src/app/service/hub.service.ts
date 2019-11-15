import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { BehaviorSubject } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { VehiclesService } from './vehicles.service';
import { CarsService } from './cars.service';

@Injectable({
  providedIn: 'root'
})
export class HubService {

  public hub: signalR.HubConnection;
  public hubConnected = new BehaviorSubject<boolean>(false);
  private hubPath: string = '/datahub';

  constructor(private _carsSrv: CarsService) {
      this.hub = new signalR.HubConnectionBuilder()
        .withUrl(this.hubPath)
        .build();
    
        this.hub.onclose((error) => {
            console.warn('Connection closed ',  error);
        });


    this.hub.on('InitData', (data) => {

      console.log("get InitData:" + data);
      if (!isNullOrUndefined(data)) {
        this._carsSrv.initCollection(data);
        }
    });

    this.StartHub();
  }


  StartHub(): Promise<void> {
    return this.hub.start()
      .then(() => {
        this.hubConnected.next(true);
        console.log('Connection Established.');
      })
      .catch((error) => {
        this.hubConnected.next(false);
        console.warn('Connection failed.');
      });
  }
}
