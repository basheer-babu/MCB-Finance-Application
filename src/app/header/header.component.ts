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
  ro: any = null;
  username: any = localStorage.getItem('username');
  // username: any = "user";
  // location: any = window.location.href.split('/');
  // endPoint: any = this.location.pop();

  getCart() {
    return this.cartService.get();
  }
  loginCheck() {
    this.role = localStorage.getItem('role');
    this.username = localStorage.getItem('username');
    if (this.role!= '' && this.role != null) {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['']);
    
  }
}
