import { Component, OnInit } from '@angular/core';
import { MainData } from '../../interfaces/maindata.interface';
import { MainDataService } from '../../services/main-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  marginProp = 'mb-4 mt-4';

  constructor( private mainDataService: MainDataService ) { }

  ngOnInit(): void {
    this.mainDataService.loadData();
  }

  get mainData(): MainData[]{
    return this.mainDataService.data;
  }

}
