import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { userRegister } from './model/Register';
import { RegisterService } from './service/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserArray:userRegister[];
  Register:FormGroup;
  post:userRegister;
  resgiteruser:userRegister[];
  constructor(private registerservice:RegisterService) { }

  ngOnInit(): void {


    this.registerservice.getuserApi().subscribe(data=>{
      this.UserArray=data;
    });


    this.Register = new FormGroup({
      firstname : new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      username:new FormControl(''),
      password: new FormControl('')



    });
  }

  onPost(){

    this.post={
      firstname:this.Register.value.firstname,
      lastname:this.Register.value.lastname,
      email:this.Register.value.email,
    username:this.Register.value.username,
    encrytedPassword:this.Register.value.password


    }


 console.log(this.post);
 this.registerservice.Register(this.post).subscribe(data=>{
  console.log(this.resgiteruser.push(data));

  });

}

}
