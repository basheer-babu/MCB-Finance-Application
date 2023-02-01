import { Injectable } from '@angular/core';
import { product } from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() { }

  cart:Array<product> =[];

  add(product:product){
    return this.cart.push(product);
  }

  get(){
    return this.cart;
  }
  
  remove(product: product) {
    console.log("product", product);
    let index = this.cart.indexOf(product);
    if (index > -1) { 
      let x=this.cart.splice(index, 1); 
    }

    
    
  //  return this.cart=this.cart.filter(b => b!==product);
  }
  

}
