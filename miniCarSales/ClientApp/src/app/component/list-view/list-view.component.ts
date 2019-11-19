import { Component, OnInit } from '@angular/core';
import { HubService } from 'src/app/service/hub.service';
import { CarsService } from 'src/app/service/cars.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {


    private subs: Subscription[] = [];

    constructor(private _carsSrv: CarsService) { }

  ngOnInit() {
    this.subs.push(
    )
  }

}
