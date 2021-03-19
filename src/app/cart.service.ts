import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http : HttpClient) {}

  addToCart(pro) {
    let items = [];
    // get items in localStorage
    let parsedJson = JSON.parse(localStorage.getItem('cart'));
    // check if localstorage is empty
    if (parsedJson == null) {
      pro.quantity = 1;
      items.push(pro);
      console.log(items);
      localStorage.setItem('cart', JSON.stringify(items));
    }
    else {
      // set array items to my localstorage items
      items = JSON.parse(localStorage.getItem('cart'));
      console.log(items)
      // check if product exisit or not
      let productExist = items.findIndex((product) => product.productId == pro.productId);
      console.log(productExist)

      //if not exisit create it
      if (productExist == -1) {
        pro.quantity = 1;
        items.push(pro);
        console.log(items);
        localStorage.setItem('cart', JSON.stringify(items));
      } else {
        // if exist increment
        pro = items[productExist];
        pro.quantity++;
        // items[productExist] = pro;
        localStorage.setItem('cart', JSON.stringify(items));
        console.log(pro.quantity);
        console.log(items)
      }
    }
  }

  subtractFromCart(pro) {
      let items = [];
      items = (JSON.parse(localStorage.getItem('cart')));

        if(items == null) console.log("your cart is empty ")
        else{
      // check if product exisit or not
      let productExist = items.findIndex((product) => product.productId == pro.productId);
      console.log(productExist)
      console.log(items)

      //if not exisit create it
      if (productExist == -1) {
          console.log("no such product in cart")
      } else {
        // if exist increment
          pro = items[productExist];
          if(pro.quantity != 0){
            pro.quantity--;
            localStorage.setItem('cart', JSON.stringify(items));
            console.log(pro.quantity);
            console.log(items);
          }
          else{
            console.log("This item is nt in cart")
          }
      }
    }
  }

  getItems() {
    return JSON.parse(localStorage.getItem('cart'));
  }

  checkout(order): Observable<any>{
      const header = {"Content-Type" : "application/json" , "Authorization" : localStorage.getItem('token')}
      console.log(order)
      const myorder = {"products" : order};
      return this.http.post( `http://localhost:3000/api/order`, myorder , {'headers':header} );
  }
  clearCart() {
    let items = [];
    localStorage.setItem('cart',"");
    return items;
  }
}
