import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

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
    let url = environment.apiUrl;
    this.flag = 0;

    this.httpClient
      .post<any>(
        url+'/auth/authenticate',
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
