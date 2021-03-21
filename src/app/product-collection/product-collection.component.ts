import { Component, OnInit, Inject } from '@angular/core';
import { ProductlistService } from '../productlist.service';
import { CartService } from '../cart.service';

// import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-collection',
  templateUrl: './product-collection.component.html',
  styleUrls: ['./product-collection.component.css'],
})
export class ProductCollectionComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private _productService: ProductlistService  ) {}

  // product : any ;

  items: any;

  addtocart(_id) {
    let product = {
      productId: _id,
    };
    // product.productId = _id;
    // console.log(_id)
    console.log(this.cartService.addToCart(product));
  }
  subtract(_id) {
    let product = {
      productId: _id,
    };
    product.productId = _id;
    console.log(this.cartService.subtractFromCart(product));
  }
  checkout() {
    if (JSON.parse(localStorage.getItem('cart')).length > 0) {
      return this.cartService
        .checkout(JSON.parse(localStorage.getItem('cart')))
        .subscribe(
          (data) => localStorage.removeItem('cart'),
          (err) => console.log(err)
        );
    } else {
      console.log('Your cart is empty you cant checkout');
    }
  }

  getItem() {
    this.items = this.cartService.getItems();
  }

  //assuming ADMIN
  user: string = 'admin';

  products: any;
  // constructor(private _productService : ProductlistService) {}
  profile = {};

  loadUser() {
    this._productService.getProduct().subscribe((res) => {
      console.log(res);
      this.products = res;
    });
  }

  ngOnInit() {
    this.loadUser();
  }

}
