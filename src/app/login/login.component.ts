import { Component } from '@angular/core';
import { EmailValidator, FormBuilder,FormGroup,Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
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
constructor(private fb:FormBuilder,private log:LoginService,private router:Router){}
ngOnInit():void{
  this.login=this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
  });
}
onSubmit():void{
const body={
  userName:this.login.get('email')?.value,
    password:this.login.get('password')?.value
}
this.log.post(body).subscribe((x:any)=>{
  console.log(x,'sucess');
  if(x.token){
    this.router.navigateByUrl('/reposit');
  }
  
})
console.log('work');


}

}
