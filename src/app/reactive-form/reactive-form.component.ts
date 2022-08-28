import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Angular Reactive Form'
  submitted= false
  loginForm= new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]), /* if you want prefield value you can insert value in side FormControl as string*/
    password: new FormControl('',[Validators.required,Validators.minLength(7),Validators.maxLength(15)])
  })
  loginUser(){
     
    console.warn(this.loginForm.value)
  }
  get user(){
    /*here inside the get method we have to define user which is defined in loginForm*/
    return this.loginForm.get('user') 
  }

  get password(){
    return this.loginForm.get('password')
  }
  // onSubmit(){
  //   this.submitted = true
  // }
  pass=''
  passwordValue(data:any){
    this.pass= data.value
    console.log(this.pass);
  }
}
