import { Injectable } from '@angular/core';
import { User} from './user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  selectedUser : User = {
 userName:"",
 password:"",
 email :"",
 gender: "",
 firstName :"",
 lastName :"",
 age :0,
 phoneNumber :0,
 address: "",
 file :  "",
   }


 baseURL: string = "http://localhost:3000/api/user/";

  constructor( private _http :HttpClient) { }

  loginUser(user: User): Observable<any> {

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
      console.log(user)

      const body = user
      console.log(body)
     return this._http.post(this.baseURL+'login', body, httpOptions )
    }
}
