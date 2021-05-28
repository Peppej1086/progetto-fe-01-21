import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  constructor(
    public loginService: LoginServiceService,
    public actRouter: ActivatedRoute,
    public myRouter: Router){
  }

  user= {
    username: "",
    password: ""
  }

  loggedUser(user: any){
    console.log(user)
    this.loginService.myLogin(this.user)
  }

  ngOnInit(): void {
  }

}
