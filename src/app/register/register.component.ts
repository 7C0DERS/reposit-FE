import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { RegisterService } from './register.service';
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
  constructor(private fb:FormBuilder,private regService:RegisterService){}
  ngOnInit():void{
    this.Register=this.fb.group({
      userName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    });
  }
  onSubmit():void{
    const body={
    userName:this.Register.get('userName')?.value,
    email:this.Register.get('email')?.value,
    password:this.Register.get('password')?.value
  }
  console.log(body);
  this.regService.post(body).subscribe(x=>{
    console.log('success',x);
  })
  this.Register.reset()
  }

}
