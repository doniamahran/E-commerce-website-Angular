import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../productlist.service';
// import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-collection',
  templateUrl: './product-collection.component.html',
  styleUrls: ['./product-collection.component.css']
})
export class ProductCollectionComponent implements OnInit {

  // items = [
  //   {id : 1, price : "$24.99", title: "Dark Chocolate Collection 15 Pieces"},
  //   {id : 3, price : "$24.99", title: "Dark Chocolate Collection 15 Pieces"},
  //   {id : 5, price : "$24.99", title: "Dark Chocolate Collection 15 Pieces"},

  // ]

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
  constructor(private _productService : ProductlistService) {}
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
