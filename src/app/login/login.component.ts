import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
email :string ="";
password :string ="";
login!:FormGroup;
isLoggedIn =false;
isLoginFailed = false;
errormsg ='';
constructor(private fb:FormBuilder){}
ngOnInit():void{
  this.login=this.fb.group({
    email:['',Validators.required,Validators.email],
    password:['',Validators.required]
  });
}

onSubmit():void{
  console.log(this.login);
  if(this.login.valid){
    // const {email,password} = this.login;

  }
}
}
