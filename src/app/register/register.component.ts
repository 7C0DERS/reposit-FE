import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email :string ="";
  password :string ="";
  isSuccessful = false;
  isSignUpFailed = false;
  errormsg ='';
  Register!:FormGroup;
  constructor(private fb:FormBuilder){}
  ngOnInit():void{
    this.Register=this.fb.group({
      email:['',Validators.required,Validators.email],
      password:['',Validators.required]
    });
  }
  onSubmit():void{

  }
}
