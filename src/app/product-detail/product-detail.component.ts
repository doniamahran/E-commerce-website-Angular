import { Component, OnInit } from '@angular/core';
import { ProductdetailsService } from '../productdetails.service';
import {ActivatedRoute, Router} from '@angular/router';

//import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],

})
export class ProductDetailComponent implements OnInit {
  user : any = "admin";


  products :any ;
   constructor(private route : ActivatedRoute, private _ProductdetailsService: ProductdetailsService ){}

  //  addToCart(product) {
  //   this.cartService.addToCart(product);
  //   window.alert('Your product has been added to the cart!');
  // }
  ngOnInit(): void {

  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = (routeParams.get('_id'));
    console.log(productIdFromRoute);
    this._ProductdetailsService.getProductDetail(productIdFromRoute).subscribe(res => {
        console.log(res);
        this.products = res;
      });
  }



}
