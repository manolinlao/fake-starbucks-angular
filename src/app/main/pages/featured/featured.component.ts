import { Component, OnInit } from '@angular/core';
import { SidebarMenuService } from '../../services/sidebar-menu.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  constructor( private sidebarMenuService: SidebarMenuService ) { }

  ngOnInit(): void {
    this.sidebarMenuService.setCurrentMenu( { menuLoaded: 'featured' } );
  }

}
