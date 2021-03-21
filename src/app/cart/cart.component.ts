import { Component, Injectable, OnInit } from '@angular/core';

import {CartService} from "../cart.service"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
  }

  product = {
    productId :"605333777fa0c31504bbee61",
    name : "choozzzz",
    quantity : 0,
  }
  items:any;

  addtocart(){
      console.log(this.cartService.addToCart(this.product))
  }
  subtract(){
    console.log(this.cartService.subtractFromCart(this.product))
  }
  checkout(){
   return this.cartService.checkout(JSON.parse(localStorage.getItem('cart'))).subscribe(
     data=>console.log(data)
   ) ;
  }

  getItem(){
  this.items = (this.cartService.getItems());
  }

  // clearcart(){
  //   this.cartService.clearCart();
  // }
}
