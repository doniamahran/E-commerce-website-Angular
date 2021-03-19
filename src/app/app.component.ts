import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('cart')).length)
  }

  // num:any = (JSON.parse(localStorage.getItem('cart'))).length ;
  user : any = 'admin';


  title = 'choco-proj';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  //search

  searched:string="";
  allData :any[] = [];   // the data from data base
  object :any[]= [];  //the product i select

  filterForName(){
    this.object = this.allData.filter((product)=>{
      return product.product_name.includes(this.searched);
    })
  }
 //end search
}
