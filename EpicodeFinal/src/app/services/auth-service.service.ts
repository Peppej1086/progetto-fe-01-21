import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public myhttp: HttpClient) { }
  urlSignup = 'https://epicode.online/epicodebeserviceunauth/api/auth/signup';
  logged = false;
  loggedUser = [];

  signUp(signup: any){
    window.confirm('Vuoi registrarti con i seguenti dati?')
    console.log(signup);
    this.myhttp.post(this.urlSignup, signup)
    .subscribe(
      response => {
        console.log('Post ' + JSON.stringify(response)),
        error => console.log(JSON.stringify(error))
      }
    )
  }
}
