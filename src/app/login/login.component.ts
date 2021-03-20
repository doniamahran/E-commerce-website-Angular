// import { Component} from '@angular/core';
// import { NgForm } from '@angular/forms';
// import {  Router } from '@angular/router';
// //import { RegistrationService } from '../registration.service';
// import { User } from '../user';
// // import { error } from 'console';

import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {  Router } from '@angular/router';
import { LoginService } from '../login.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  user = new User ();
  msg ="";
  massage="You entered invalid field";

  showSucessMessage: boolean;
    serverErrorMessages: string;
   constructor(public loginService:LoginService , private _router :Router){}

ngOnInit(): void {
}

onSubmit(form: NgForm) {
  this.loginService.loginUser(form.value).subscribe(
    res => {
      console.log(res)
      localStorage.setItem('token',res.token );
      this.showSucessMessage = true;
      setTimeout(() => this.showSucessMessage = false, 4000);
      this.resetForm(form);
    },
    err => {
      if (err.status === 422) {
        this.serverErrorMessages = err.error.join('<br/>');
      }
      else{
        this.serverErrorMessages = 'Something went wrong.Please contact admin.';
        console.log(err)
      }
    }
  );
}

resetForm(form: NgForm) {
  this.loginService.selectedUser = {
  email:"",
userName:"",
password:"",
gender: "",
firstName :"",
lastName :"",
age :0,
phoneNumber :0,
address: "",
file :"",
  };
  form.resetForm();
  this.serverErrorMessages = '';
}
// gotoregisration(){
//   // this._router.navigate(['./registration']);
// }

}
