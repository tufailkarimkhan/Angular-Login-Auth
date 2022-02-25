import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel, RegisterModel } from './user.model';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  private registerUrl="http://localhost:3001/register"
  private loginUrl="http://localhost:3001/login"

  constructor(private http:HttpClient) { }
  /*Here we are login*/ 
  loginUser(loginData:LoginModel){
    return this.http.post(this.loginUrl,loginData)
  }
  /*here registerUser method is use to post use's input*/
  registerUser(registerData:RegisterModel){
    return this.http.post(this.registerUrl,registerData)
  }
/*this funcion return true and false if user have token return true else false */ 
  loggedIn(){
    return !!localStorage.getItem('token')
  }
/*Here we are acquire the token form the localStoreate and return it to the interceptor*/ 
  getToken(){
    return localStorage.getItem('token')
  }
  
}
