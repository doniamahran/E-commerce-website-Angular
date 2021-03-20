import { Injectable } from '@angular/core';
import { User} from './user';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProfilesService {
  constructor( private _http :HttpClient) { }
  public getUserInfo(id):Observable<any>{
  return this._http.get<any>(`http://localhost:3000/api/user/${id}`)
  }
}



// const header = {"Content-Type" : "application/json" , "Authorization" : localStorage.getItem('token')}
// return this.http.post( `http://localhost:3000/api/order`, myorder , {'headers':header} );

