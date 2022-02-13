import { Component, OnInit } from '@angular/core';
import { Featured } from '../../interfaces/featured.interface';
import { FeaturedDataService } from '../../services/featured-data.service';
import { SidebarMenuService } from '../../services/sidebar-menu.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html'
})
export class FeaturedComponent implements OnInit {

  marginProp = 'mb-4 mt-4';

  constructor( private sidebarMenuService: SidebarMenuService, private featuredDataService: FeaturedDataService ) { }

  ngOnInit(): void {
    this.sidebarMenuService.setCurrentMenu( { menuLoaded: 'featured' } );

    this.featuredDataService.loadData();
  }

    // getter - obtains if data is already loaded
    get dataLoaded(): boolean{
      return this.featuredDataService.isDataLoaded;
    }

    get features(): Featured[]{
      return this.featuredDataService.data;
    }
   

}
