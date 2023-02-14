import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HeaderComponent } from './header/header.component';
import { CheckbookComponent } from './components/checkbook/checkbook.component';
import { ProductComponent } from './components/product/product.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ServiceComponent } from './service/service.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { FormsModule } from '@angular/forms';
import { CartServiceService } from './service/cart-service.service';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    CheckbookComponent,
    ProductComponent,
    AllProductsComponent,
    ServiceComponent,
    CartComponent,
    AddProductsComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [CartServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
