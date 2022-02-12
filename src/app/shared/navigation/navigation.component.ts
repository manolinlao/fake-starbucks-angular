import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  userName: string | undefined;
  caca:boolean = true;

  private authServiceSubscription: Subscription | undefined;
 
  constructor( private router: Router, private authService: AuthService ) { }

  ngOnInit(): void { 
    this.authServiceSubscription = this.authService.currentUser.subscribe( currentUser => {     
      this.userName = currentUser.userName;      
    });
  }

  signIn(){
    this.router.navigateByUrl("/login");
  }

  logOut(){
    this.authService.setCurrentUser( { userName: '' } );
    this.router.navigateByUrl('/');
  }

  joinNow(){
    this.router.navigateByUrl("/register");
  }

}
