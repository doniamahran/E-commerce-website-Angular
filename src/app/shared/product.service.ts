import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  selectedProduct : Product = {
    name:'',
    category:'',
    description: '',
    price: 0,
    quantity:0,
    country: '',
    image:''

  }


  constructor(private http: HttpClient) { }
   baseurl: string = "https://chocolate-store-api.herokuapp.com/";
  // baseurl: string = "http://localhost:3000/";

   t="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTM4ZjAyNjE3MmU1MjRhMDhhN2U5NSIsImlhdCI6MTYxNjE1MTkzMX0.ZEUCV4vH6mCGlzsiY79XHNlMnVVuQPyeBUG4rcrGnXo";
   headers_object = new HttpHeaders().set("Authorization", this.t);
     httpOptions = {
      headers: this.headers_object
    };

  addProduct(product: Product){
    const body= new FormData()
    const headers = {}

    Object.keys(product).forEach(key => {

      body.append(`${key}`, product[key]);

    });

    console.log(body)
    console.log(product);
    return this.http.post(this.baseurl + 'api/product',body,{headers:headers});
   // return this.http.post(this.baseurl + 'api/product', product, this.httpOptions );
  }
  updateProduct(id,data){
    return this.http.patch(`https://chocolate-store-api.herokuapp.com/api/product/${id}`, data);
  }
  deleteProduct(id){
    return this.http.delete(`https://chocolate-store-api.herokuapp.com/api/product/${id}`,this.httpOptions);
  }


}

