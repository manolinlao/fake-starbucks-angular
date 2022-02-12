import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserLogged } from '../../interfaces/auth.interface';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title: string = 'Register';
  textButton: string = 'Join';

  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  register(user: UserLogged){   
    this.authService.setCurrentUser( { userName: user.name } );
    this.router.navigateByUrl('/');
  }

}
