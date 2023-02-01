import { Component, Input } from '@angular/core';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartService: CartServiceService) { }
  total: any;
  @Input() product: any = [] as any;
  
  getCart(){
    return this.cartService.get();
  }


  removeToCard(){
    
    this.cartService.remove(this.product);
    // localStorage.removeItem(this.product.id);
  }
  flag: boolean = false;
  checkOut() {
    this.flag = true;
  }
  totalCount() {
    for (let index = 0; index < this.product.length; index++) {
      const element = this.product[index];
      console.log(this.total);
      
      this.total = this.total + element.charge;
      
    }
  }
}
