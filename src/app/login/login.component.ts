import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
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
constructor(private fb:FormBuilder,private log:LoginService,private router:Router){}
ngOnInit():void{
  this.login=this.fb.group({
    email:['',Validators.required,EmailValidator],
    password:['',Validators.required]
  });
}

onSubmit():void{

  if(this.login.valid){
    // const {email,password} = this.login;

  }
}
}
