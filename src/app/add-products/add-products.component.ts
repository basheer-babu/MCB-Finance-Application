import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { product } from '../interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
})
export class AddProductsComponent {
  constructor(private httpClient: HttpClient, private router: Router) {}
  role: any = localStorage.getItem('role');
  productBody: product = {
    id: '',
    uid: '',
    name: '',
    description: '',
    image: '',
    charge: 0.0,
    termsAndConditions: '',
  };

  flag: number = 0;

  addProduct() {
    this.flag = 0;
    let token: any = localStorage.getItem('token');
    let header = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    this.httpClient
      .post<any>('http://localhost:9191/api/v1/addProduct', this.productBody, {
        headers: header,
      })
      .subscribe({
        next: (v) => { this.flag = 1;
          setTimeout(() => {this.router.navigate(['products'])}, 2000); },
        error: (e) => { console.error(e); this.flag = 2 },
        complete: () => console.info('complete')
        });
  }
}
