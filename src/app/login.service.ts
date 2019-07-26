import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor() { }
  loginData : Login[] = [];

  addData(login:Login): string{
    this.loginData.push(login);
    console.log(this.loginData);
    for (let index = 0; index < this.loginData.length; index++) {
      console.log(this.loginData[index]); 
      
    }
    return "Success";
  }
  
}
