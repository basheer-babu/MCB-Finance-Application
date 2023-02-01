import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  constructor(private httpClient: HttpClient) {

  
  } 

  products: any;
  ngOnInit(): void {
    let token:any=localStorage.getItem("token");
    let header = new HttpHeaders().set(
      "Authorization","Bearer "+token);
    this.httpClient.get("http://localhost:9191/api/v1/products", {headers:header}).subscribe(res=>{
      console.log(res);
      
     this.products=res;
    },
    (error)=>{
      console.error("error",error);
      this.products=[];
    })
    
    
  }

}
