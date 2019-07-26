import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [LoginService]
})
export class LoginComponent implements OnInit {

  loginService : LoginService = null;
  constructor(loginService : LoginService) {
    this.loginService = loginService;
  }

  ngOnInit() {
    this.login.userName="Kaushal";
    this.login.password="havefun";
  }
  login : Login = new Login();
  
  onSubmit() {
    console.log(JSON.stringify(this.login));
    console.log(this.loginService.addData(this.login));
    this.login = new Login();
  }
}
