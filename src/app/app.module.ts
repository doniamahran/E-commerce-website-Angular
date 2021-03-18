import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavSearchComponent } from './nav-search/nav-search.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductCollectionComponent } from './product-collection/product-collection.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import {ProductlistService } from './productlist.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './shared/product.service';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';

// import { LoginComponent } from './login/login.component';
// import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
// import { RegistrationComponent } from './registration/registration.component';
// import { RegistrationService} from './registration.service'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    CardsComponent,
    FooterComponent,
    NavSearchComponent,
    AboutComponent,
    HomeComponent,
    ProductCollectionComponent,
    ProductDetailComponent,
    AddProductComponent,
    CartComponent,
    // LoginComponent,
    // LoginsuccessComponent,
    // RegistrationComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    // SidebarModule.forRoot()
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'about', component: AboutComponent},
      {path: 'home', component: HomeComponent},
      {path: 'collection', component: ProductCollectionComponent},
      {path: 'product-detail/:_id', component: ProductDetailComponent},
      {path: 'addproduct', component: AddProductComponent},
      {path: 'cart', component: CartComponent},
      // {path: 'login', component: LoginComponent},
      // {path: 'loginsucess', component: LoginsuccessComponent},
      // {path: 'registration', component: RegistrationComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'}
    ]),
    HttpClientModule


  ],
  providers: [ProductlistService,ProductService/* ,RegistrationService */ , CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
