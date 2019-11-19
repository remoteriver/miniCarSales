import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { CarsService } from '../../service/cars.service';
import { MatSelectionList } from '@angular/material/list';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.css']
})
export class ListFilterComponent implements OnInit {


  @ViewChild('makes', { static: true }) makeSelectList: MatSelectionList;

    constructor(private _carsSrv: CarsService) { }

  ngOnInit() {
    this.makeSelectList.selectionChange.subscribe(change => this._carsSrv.onFilterChanged(this.makeSelectList.selectedOptions ));
  }

}
