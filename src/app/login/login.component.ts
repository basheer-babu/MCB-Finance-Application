import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private httpClient: HttpClient, private router:Router) {}

  loginBody: any = {
    username: '',
    password: '',
  };

  flag: number = 0;

  token: string = '';
  role: string = '';

  loginControl() {
    this.flag = 0;

    this.httpClient
      .post<any>(
        'http://localhost:9191/api/v1/auth/authenticate',
        this.loginBody
      )
      .subscribe( {
          

        next: (res) => { 
          localStorage.setItem('token', res.token);
          localStorage.setItem('role', res.userRole[0].authority);
          localStorage.setItem('username', this.loginBody.username);
          this.flag = 1;
          this.router.navigate(['products']);
        },
        error: (e) => { console.error(e); this.flag = 2;},
        complete: () => console.info('complete')
       
          

          
          
        });
  }
}
