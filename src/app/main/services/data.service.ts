import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, SubCategory } from '../interfaces/coffeedata.interface';
import { coffeeData } from '../../data/coffeeData';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public isDataLoaded: boolean = false;
  public data: Category[] = [];

  constructor( private http: HttpClient) { }

  // TODO:use http service to load coffee products from some REST API
  loadProducts(){   
    if(!this.isDataLoaded){ 
      setTimeout( ()=> {
        this.data = coffeeData;   
        this.isDataLoaded = true;
        console.log('loaded data');
      }, 1000 );
    }
  }

  getSubCategory( id: string ): SubCategory | undefined{
    let subCategory;
        
    for( let i = 0; i < this.data.length; i++ ){
      for( let j = 0; j < this.data[i].subCategories.length; j++ ){
        if( this.data[i].subCategories[j].subCategoryId === id ){
          subCategory = this.data[i].subCategories[j];          
          break;
        }
      }
    }
    return subCategory;
  }

}
