import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';


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
  baseurl: string = "http://localhost:3000/";

  addProduct(product: Product){
    return this.http.post(this.baseurl + 'api/product', product);
  }
  updateProduct(id,data){
    return this.http.patch(`http://localhost:3000/api/product/${id}`, data);
  }
  deleteProduct(id){
    return this.http.delete(`http://localhost:3000/api/product/${id}`);
  }
}
