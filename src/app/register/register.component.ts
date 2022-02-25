import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RegisterModel } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private authService:AuthService, private router:Router) {}
  
  ngOnInit(): void {}
  
  registerUser(value:RegisterModel) {
    this.authService.registerUser(value)
    .subscribe(
      res=> {
        alert(res)
        this.router.navigate(['/login'])
      },
      err=> console.log(err)
    )
  }
}
