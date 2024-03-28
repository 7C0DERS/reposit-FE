import { Component } from '@angular/core';
import { EmailValidator, FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
email :string ="";
password :string ="";
login!:FormGroup;
isLoggedIn =false;
isLoginFailed = false;
errormsg ='';
constructor(private fb:FormBuilder){}
ngOnInit():void{
  console.log(this.login);
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
