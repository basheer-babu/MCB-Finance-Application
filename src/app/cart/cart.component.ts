import { Component, Input } from '@angular/core';
import { product } from '../interfaces/product';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartService: CartServiceService) { }

  @Input() product: any = [] as any;
  
  getCart(){
    return this.cartService.get();
  }


  removeToCard(pro:product){
    
    this.cartService.remove(pro);
    // localStorage.removeItem(this.product.id);
  }
  flag: boolean = false;
  checkOut() {
    this.flag = true;
  }
  totalCount() {
    let  total:number =0 ;
    for (let pro of this.getCart()) {
      total += Number(pro.charge);  
    }
    return total;
  }
}
