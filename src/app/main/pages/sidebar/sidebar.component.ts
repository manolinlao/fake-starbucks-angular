import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Category } from '../../interfaces/coffeedata.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  get data(): Category[]{
    return this.dataService.data;
  }

  productSelected( id: string ){   
    this.router.navigate( ['/menu/subcategory', id ] );
  }
}
