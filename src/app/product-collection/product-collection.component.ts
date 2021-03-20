import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../productlist.service';
import{CartService} from '../cart.service';
// import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-collection',
  templateUrl: './product-collection.component.html',
  styleUrls: ['./product-collection.component.css']
})
export class ProductCollectionComponent implements OnInit {

  constructor(private cartService : CartService , private _productService : ProductlistService) { }

  // product : any ;

  items:any;


  addtocart(_id){
   let product = {
      productId : _id,
    }
    // product.productId = _id;
    // console.log(_id)
      console.log(this.cartService.addToCart(product))
  }
  subtract(_id){
    let product = {
      productId : _id,
    }
    product.productId = _id;
    console.log(this.cartService.subtractFromCart(product))
  }
  checkout(){
   return this.cartService.checkout(JSON.parse(localStorage.getItem('cart'))).subscribe(
     data=>console.log(data)
   ) ;
  }

  getItem(){
  this.items = (this.cartService.getItems());
  }

  // public id : number = 5 ;
  // selectedProduct : ProductCollectionComponent;
  // public products = [];
  // constructor(private _productService : ProductlistService, private router : Router) { }
  // load(){
  //   this.products = this._productService.getProduct();
  // }

  // onSelect (id) : void {
  //   this.selectedProduct = Product;
  //   this.router.navigateByUrl(['/collection/'+])
  // }

  // ngOnInit(): void {
  //   this.load();
  // }


////

  //assuming ADMIN
  user : string = "admin";


  products :any ;
  // constructor(private _productService : ProductlistService) {}
  profile = {};

  loadUser() {
    this._productService.getProduct().subscribe(res => {
      console.log(res);
      this.products = res;
    });
  }

  ngOnInit(){
    this.loadUser()
  }


}
