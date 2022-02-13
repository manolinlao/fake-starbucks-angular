import { Component, OnInit } from '@angular/core';
import { SidebarMenuService } from '../../services/sidebar-menu.service';

@Component({
  selector: 'app-previous',
  templateUrl: './previous.component.html'
})
export class PreviousComponent implements OnInit {

  constructor( private sidebarMenuService: SidebarMenuService ) { }

  ngOnInit(): void {
    this.sidebarMenuService.setCurrentMenu( { menuLoaded: 'previous' } );
  }

}
