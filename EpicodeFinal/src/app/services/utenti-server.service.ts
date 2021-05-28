import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtentiServerService {
  url = 'https://epicode.online/epicodebeserviceunauth/api/users';

  constructor(
    public httpClienti: HttpClient,
    public myRouter: Router){
  }

  getUtenti(){
    return this.httpClienti.get(this.url)
  }
}
