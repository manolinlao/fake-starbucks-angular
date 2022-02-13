import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { DataService } from '../../services/data.service';
import { SubCategory } from '../../interfaces/coffeedata.interface';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html'
})
export class ProductsCategoryComponent implements OnInit {

  idCategory: string = '';  

  constructor( private activatedRoute: ActivatedRoute, private dataService: DataService, private router: Router ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.idCategory = params['id'];
    });
  }

  get subCategory(): SubCategory | undefined{
    return this.dataService.getSubCategory(this.idCategory);
  }

  goMenu(){    
    this.router.navigateByUrl( '/menu' );
  }

  productSelected( id: string){
    this.router.navigate( ['/menu/product', id ] );
  }

  getImage( id: string ){
    console.log(id);
    return `assets/img/category/${ id.substring(0,8) }.jpg`;
  }

}
