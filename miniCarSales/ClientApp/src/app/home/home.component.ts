import { Component, OnInit } from '@angular/core';
import { HubService } from '../service/hub.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private _hubSrv: HubService) {

  }

  ngOnInit() {
    this._hubSrv.StartHub();
  }
}
