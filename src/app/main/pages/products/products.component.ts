import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../../interfaces/coffeedata.interface';
import { DataService } from '../../services/data.service';
import { SidebarMenuService } from '../../services/sidebar-menu.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  constructor( private sidebarMenuService: SidebarMenuService,  private dataService: DataService, private router: Router ) { }

  ngOnInit(): void {
    this.sidebarMenuService.setCurrentMenu( { menuLoaded: 'allproducts' } );
  }

  get data(): Category[]{
    return this.dataService.data;
  }

  productSelected( id: string ){
    this.router.navigate( ['/menu/subcategory', id ] );
  }

  getImage( id: string ){
    return `assets/img/category/${ id }.jpg`;
  }

}
