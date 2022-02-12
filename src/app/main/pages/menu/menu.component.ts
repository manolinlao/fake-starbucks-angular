import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarMenuService } from '../../services/sidebar-menu.service';
import { DataService } from '../../services/data.service';
import { Category } from '../../interfaces/coffeedata.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private sidebarMenuServiceSubscription: Subscription | undefined;
  subMenuLoaded: string = '';
 
  constructor( private sidebarMenuService: SidebarMenuService, private dataService: DataService ) { }

  ngOnInit(): void {
    // subscription to know wich submenu is loaded
    this.sidebarMenuServiceSubscription = this.sidebarMenuService.currentMenu.subscribe( currentMenu => {     
      
      // this solves problem with syncro of changing subMenuLoaded 
      setTimeout( ()=>{
        this.subMenuLoaded = currentMenu.menuLoaded; 
        if(this.subMenuLoaded===undefined){
          this.subMenuLoaded = 'allproducts';
        }       
      },1);
      
      this.dataService.loadProducts();

    });
  }
  
  ngOnDestroy(): void {
    this.sidebarMenuServiceSubscription!.unsubscribe();
  }

  // getter - obtains if data is already loaded
  get dataLoaded(): boolean{
    return this.dataService.isDataLoaded;
  }
 

}
