import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthFormComponent } from './components/auth-form/auth-form.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthFormComponent
  ],
  exports:[
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AuthModule { }
