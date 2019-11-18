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

    private hub: signalR.HubConnection;
    private hubConnected = new BehaviorSubject<boolean>(false);
  private hubPath: string = '/datahub';

  constructor(private _carsSrv: CarsService) {
      this.hub = new signalR.HubConnectionBuilder()
        .withUrl(this.hubPath)
        .build();
    
        this.hub.onclose((error) => {
            console.warn('Connection closed ',  error);
        });


      this.hub.on('VehicleCollection', (data) => {

          console.log("get VehicleCollection:" + data);
      if (!isNullOrUndefined(data)) {
          this._carsSrv.getVehicleCollection(data);
        }
      });


      this.hub.on('VehicleMakes', (data) => {

          console.log("get VehicleMakes:" + data);
          if (!isNullOrUndefined(data)) {
              this._carsSrv.getVehicleMakes(data);
          }
      });


      this.hub.onclose((error) => {

          console.warn("connection closed:" + error);
          this.hubConnected.next(false);
      });

    this.startHub();
  }


  startHub(): Promise<void> {
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

    sendData(api:string,arg:any) {
        this.hub.send(api, arg).then();
    }
}
