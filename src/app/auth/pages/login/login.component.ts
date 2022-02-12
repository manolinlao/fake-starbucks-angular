import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogged } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title: string = 'Sign in';
  textButton: string = 'Sign in';

  constructor(private authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
  }

  login(user: UserLogged){
    this.authService.setCurrentUser( { userName: user.name } );
    this.router.navigateByUrl('/');
  }
}
