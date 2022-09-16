import { DOCUMENT } from '@angular/common';
import { Component, OnInit,NgZone, Inject } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { AppService } from 'src/app/Appservice';
import { user } from './model/userdata';
import { AuthguardService } from './service/Authguard.service';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  //template: '<button (click)="auth.loginWithRedirect()">Log in</button>',
  styleUrls: ['./profile-home.component.css']
})
export class ProfileHomeComponent implements OnInit {

  profileJson: string = null;


  loginForm: FormGroup;
  users:any;
  errorMsg: string;
  user:user[];
  username:string;
  password1: any;
  guser;


  constructor(private router: Router,
     private appService: AppService,
    public auth: AuthService,
    @Inject(DOCUMENT) public doc: Document,
     private authservice:AuthguardService,ngZone:NgZone) {


    this.auth.user$.subscribe(
        (profile) => (this.profileJson = JSON.stringify(profile, null, 2)),
      );
console.log(auth.user$);
     }
    loginWithRedirect() {
      return this.auth.loginWithRedirect();
   /// throw new Error('Method not implemented.');
    }
    logout(): void {
     return this.auth.logout({ returnTo: this.doc.location.origin });
    }

  ngOnInit(): void {

    this.authservice.getAllUser().subscribe(data=>{
      this.user=data;
      console.log(this.user);
    });

    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }
  afterSignUp(googleUser){
    this.guser=googleUser;
    console.log(googleUser);
  }

  onFormSubmit(){
     let username = this.loginForm.value.username;
     let password = this.loginForm.value.password;


      //this.password1=this.user.find(u=>(atob(u.encrytedPassword)));
     let user1  = this.user.find(u=> (u.userName === username || u.encrytedPassword === password));
    // this.username=atob(localStorage.getItem('token')).split(':')[0];
   // this.doctor = this.user.find(u=> (u.username === this.username));

     //console.log( this.did=this.doctor.doctors.id);

    // this.did=this.doctor.doctors.id;

console.log(user1);
     if(user1){
        localStorage.setItem("isLoggedIn","true");
        let token = btoa(username + ':' + password);
        localStorage.setItem("token", token);
        this.appService.loggedIn.next(true);
        this.router.navigateByUrl('/');
     }else{
        this.errorMsg = 'Invalid Credentials';
     }
  }


}

