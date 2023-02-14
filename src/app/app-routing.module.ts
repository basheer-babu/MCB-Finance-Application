import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { CheckbookComponent } from './components/checkbook/checkbook.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: '', component: LoginComponent },
  { path: 'chequebook', component: CheckbookComponent },
  { path: 'products', component: AllProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'addproduct', component: AddProductsComponent },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
