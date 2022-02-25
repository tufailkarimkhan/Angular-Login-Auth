import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginModel } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:LoginModel = {
    email:'',
    password:''
  };
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    return this.authService.loginUser(this.login)
    .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token',res.toString())
          this.router.navigate(['/special'])
        },
        error => console.log(error)
      )
  }
}
