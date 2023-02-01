import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { CartServiceService } from 'src/app/service/cart-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  constructor(
    private cartService: CartServiceService,
    private httpClient: HttpClient
  ) {}
  @Input() product: any = [] as any;

  isInCart: boolean = false;
  role: any = localStorage.getItem('role');

  addToCard() {
    // this.emitBook.emit(this.book);
    // this.isInCart=true;
   
    this.cartService.add(this.product);
    // localStorage.setItem(this.product.id, JSON.stringify(this.product)); 
  }
  removeToCard() {
    this.isInCart = false;
    this.cartService.remove(this.product);
  }
  flag: any = 0;
  deleteProduct() {
    this.flag = 0;
    let token: any = localStorage.getItem('token');
    let header = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    this.httpClient
      .delete('http://localhost:9191/api/v1/delete/' + this.product.id, {
        headers: header,
      })
      .subscribe(
        (res) => {
          console.log(res);

          this.flag = 1;
          setTimeout(() => {
            window.location.reload();
          }, 300);
        },
        (error) => {
          console.error('error', error);
          this.flag = 2;
        }
      );
  }
}
