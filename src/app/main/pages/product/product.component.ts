import { Component, OnInit } from '@angular/core';
import { SidebarMenuService } from '../../services/sidebar-menu.service';
import { Router } from '@angular/router';

interface Order{
  size: string;
  comments: string;
  flavor: string;
  topping: string;
  cupsize: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  order: Order = {
    size: 'short',
    comments: '',
    flavor: '',
    topping: '',
    cupsize: 'Tall'
  };

  constructor( private sidebarMenuService: SidebarMenuService, private router:Router ) { }

  ngOnInit(): void {
    this.sidebarMenuService.setCurrentMenu( { menuLoaded: 'product' } );
  }

  goMenu(){    
    this.router.navigateByUrl( '/menu' );
  }
  
  addToOrder(){
    console.log(this.order);
  }

}
