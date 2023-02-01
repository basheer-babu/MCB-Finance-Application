import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private cartService: CartServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  role: any = localStorage.getItem('role');
  username: any = localStorage.getItem('username');
  // username: any = "user";
  location: any = window.location.href.split('/');
  endPoint: any = this.location.pop();

  getCart() {
    return this.cartService.get();
  }
  loginCheck() {
    
    return this.endPoint != 'login';
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
    setTimeout(() => {window.location.reload()}, 300); 


  }
}
