import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserLogged } from '../../interfaces/auth.interface';


@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  @Input() textTitle: string = '';
  @Input() textButton: string = '';

  @Output() onFormSubmitted: EventEmitter<UserLogged> = new EventEmitter();

  user: UserLogged = {
    name: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  formSubmit(){   
    if( this.user.name != '' && this.user.password != '' ){      
      this.onFormSubmitted.emit( this.user );
    }
  }

}
