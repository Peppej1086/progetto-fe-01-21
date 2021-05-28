import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title = 'Signup';
  constructor(
    public authService: AuthServiceService,
    public actRouter: ActivatedRoute,
    public myRouter: Router){
  }

  user= {
    username: "",
    email: "",
    password: "",
    role: [""]
  }

  newUser(user: any){
    console.log(user)
    this.authService.signUp(this.user)
  }

  ngOnInit(): void {
  }

}
