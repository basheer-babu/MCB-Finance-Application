import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { product } from '../interfaces/product';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
})
export class AddProductsComponent  {
  constructor(private httpClient: HttpClient) { }
  role: any = localStorage.getItem('role');
  productBody: product = {
    "id":"",
    "uid": "",
    "name": "",
    "description": "",
    "image": "",
    "charge": 0.0,
    "termsAndConditions": ""
  };
  
  
  
  flag:number=0 ;
  
  addProduct(){
    this.flag = 0;
    let token:any=localStorage.getItem("token");
    let header = new HttpHeaders().set(
      "Authorization","Bearer "+token);
    this.httpClient.post<any>('http://localhost:9191/api/v1/addProduct',this.productBody,{headers:header}).subscribe(
      (res) => {
        console.log(res);

        this.flag = 1;
      },
      (error) => {
        console.error('error', error);
        this.flag = 2;

      }
    );
  }
}
