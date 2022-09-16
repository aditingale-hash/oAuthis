import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {

  constructor() { }
  loggedIn:boolean;
  username:string;
  ngOnInit(): void {

    let status = localStorage.getItem('isLoggedIn');
        if(status){
            this.loggedIn = true;
            let token = localStorage.getItem('token');
            token = atob(token);
            this.username = token.split(":")[0];
        }
        else{
            this.loggedIn = false;
        }



  }

  onLogOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    this.loggedIn = false;
  }


}
