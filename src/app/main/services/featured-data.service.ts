import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { featuredData } from '../../data/featuredData';
import { Featured } from '../interfaces/featured.interface';

@Injectable({
  providedIn: 'root'
})
export class FeaturedDataService {

  data: Featured[] = [];
  isDataLoaded: boolean = false;

  constructor( private http: HttpClient) { }

  // TODO:use http service to load coffee products from some REST API
  loadData(){   
    this.data = featuredData;   
    this.isDataLoaded = true;
  }
}
