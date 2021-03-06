import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {

  constructor(private http: HttpClient) {

  }
  getProductDetail(id : any){
  //  return this.http.get(`http://localhost:3000/api/product/${id}`);
  return this.http.get(`https://chocolate-store-api.herokuapp.com/api/product/${id}`);
  }
}
