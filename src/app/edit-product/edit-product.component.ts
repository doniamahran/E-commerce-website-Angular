import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product.service';

import {ActivatedRoute} from '@angular/router';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  providers:[ProductService]
})
export class EditProductComponent implements OnInit {

  user : any = "admin";

  showSucessMessage: boolean;
  serverErrorMessages: string;

  products :any ;
   constructor(public _ProductService : ProductService, private route : ActivatedRoute){}
    routeParams = this.route.snapshot.paramMap;
    productIdFromRoute = (this.routeParams.get('_id'));
  onSubmit(form: NgForm) {
    this._ProductService.updateProduct(this.productIdFromRoute,form.value).subscribe(
      res => {
        console.log(res,"data updated");

        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
    //    this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else{
          console.log(err);
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';

        }
      }
    );
  }

  // resetForm(form: NgForm) {
  //   this._ProductService.selectedProduct = {
  //     name:'',
  //     category:'',
  //     description: '',
  //     price: 0,
  //     quantity:0,
  //     country: '',
  //    image:''
  //   };
  //   form.resetForm();
  //   this.serverErrorMessages = '';
  // }

  photo
  fd:FormData;
   done(t) {
     t.click();
   }

  change(e, t2) {

    let file = e.target.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = readerEvent => {
      let content = readerEvent.target.result;
      t2.src = content;
    };
  }
  //end of photo

  ngOnInit(): void {
    // const routeParams = this.route.snapshot.paramMap;
    // const productIdFromRoute = (routeParams.get('_id'));
    //   console.log(productIdFromRoute);
    //   this._ProductService.updateProduct(productIdFromRoute,form.value).subscribe(res => {
    //       console.log(res);
    //       this.products = res;
    //     });
  }


}
