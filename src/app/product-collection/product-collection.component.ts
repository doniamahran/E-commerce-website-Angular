import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../productlist.service';
// import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-collection',
  templateUrl: './product-collection.component.html',
  styleUrls: ['./product-collection.component.css']
})
export class ProductCollectionComponent implements OnInit {

  //assuming ADMIN
  //user : string = "admin";
user : string = "us";

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
