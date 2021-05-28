import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyServiceTokenService } from './my-service-token.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(
    public myhttp: HttpClient,
    public myTokenService: MyServiceTokenService ){}
  urlLogin = 'https://epicode.online/epicodebeserviceunauth/api/auth/login';

  myLogin(login: any){
    this.myhttp.post(this.urlLogin, login)
    .subscribe(
      response => {
        this.myTokenService.myToken= response['accessToken']
        console.log(this.myTokenService.myToken)
        console.log('Post ' + JSON.stringify(response)),
        error => console.log(JSON.stringify(error))
      }
    )
  }
}