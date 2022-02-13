import { Component, OnInit } from '@angular/core';
import { SidebarMenuService } from '../../services/sidebar-menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

interface Order{
  size: string;
  comments: string;
  flavor: string;
  topping: string;
  cupsize: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  idProduct: string = '';

  order: Order = {
    size: 'short',
    comments: '',
    flavor: '',
    topping: '',
    cupsize: 'Tall'
  };

  constructor(  private sidebarMenuService: SidebarMenuService, 
                private router:Router, 
                private activatedRoute: ActivatedRoute, 
                private dataService:DataService ) { }

  ngOnInit(): void {
    this.sidebarMenuService.setCurrentMenu( { menuLoaded: 'product' } );

    this.activatedRoute.params.subscribe(params=>{
      this.idProduct = params['id'];
    });
  }

  get productName(): string{
    return this.dataService.getProductName(this.idProduct);
  }

  get productCalories(): string{
    return '10 calories';
  }


  get imageProduct(): string{
    return `assets/img/product/${ this.idProduct.substring(0,5)}.jpg`;
  }

  goMenu(){    
    this.router.navigateByUrl( '/menu' );
  }
  
  addToOrder(){
    console.log(this.order);
  }

}
