import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/*
  this service allows the menu to know which menu is loaded to show or not the products sidebar
*/
export interface Data{
  menuLoaded: string;
}

@Injectable({
  providedIn: 'root'
})
export class SidebarMenuService {

  private currentMenuSubject: BehaviorSubject<Data> = new BehaviorSubject( {} as Data );
  public readonly currentMenu: Observable<Data> = this.currentMenuSubject.asObservable();

  constructor() { }

  setCurrentMenu( currentMenu: Data ): void {
    this.currentMenuSubject.next( currentMenu );
  }

}
