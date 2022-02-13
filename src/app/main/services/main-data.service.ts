import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mainData } from '../../data/mainData';
import { MainData } from '../interfaces/maindata.interface';

@Injectable({
  providedIn: 'root'
})
export class MainDataService {

  data: MainData[] = [];
  isDataLoaded: boolean = false;

  constructor( private http: HttpClient) { }

  // TODO:use http service to load coffee products from some REST API
  loadData(){   
    this.data = mainData;   
    this.isDataLoaded = true;
  }
}
