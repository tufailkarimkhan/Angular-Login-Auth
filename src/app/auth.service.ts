import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel, RegisterModel } from './user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  helper = new JwtHelperService
 
  /*Here we are getting cookies form browser*/ 
  getCookie(name:any):any {
    const value = `; ${document.cookie}`;
    const parts:any[] = value.split(`; ${name}=`);
    if (parts.length === 2) 
    return parts.pop().split(';').shift();
    
  }
  /*Here we are use delete cookies from browser*/
   deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
  
  private registerUrl="http://localhost:3001/register"
  private loginUrl="http://localhost:3001/login"

  constructor(private http:HttpClient, private router:Router ) { }
  /*Here we are login*/ 
  loginUser(loginData:LoginModel){
    return this.http.post(this.loginUrl,loginData,{withCredentials:true})
  }
  /*here registerUser method is use to post use's input*/
  registerUser(registerData:RegisterModel){
    return this.http.post(this.registerUrl,registerData)
  }
/*this funcion return true and false if user's token expire return false else true */ 
  loggedIn(){
   
    const token=this.getCookie('jwtToken')
    if(this.helper.isTokenExpired(token)){
      return false
    }else{
      return true
    }
  }
  
  /*here defined lougOut funcion which call when logOut Button Click form app.component.html*/ 
  logoutUser(){
    this.deleteAllCookies()
    this.router.navigate(['/events'])
  }
  /*Here we are acquire the token form the localStoreate and return it to the interceptor*/ 
  getToken(){
    return this.getCookie('jwtToken')
  }
  
}
