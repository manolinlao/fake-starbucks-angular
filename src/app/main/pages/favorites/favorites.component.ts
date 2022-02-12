import { Component, OnInit } from '@angular/core';
import { SidebarMenuService } from '../../services/sidebar-menu.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor( private sidebarMenuService: SidebarMenuService ) { }

  ngOnInit(): void {
    this.sidebarMenuService.setCurrentMenu( { menuLoaded: 'favorites' } );
  }

}
