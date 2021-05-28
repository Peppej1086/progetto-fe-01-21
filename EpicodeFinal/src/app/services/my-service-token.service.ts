import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceTokenService {
  //myAccesServiceToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMTEiLCJpYXQiOjE2MjIyMDg2NzcsImV4cCI6MTYyMzA3MjY3N30.3qU1910purx4BgdQuxx-r6nRYJtPv2JulkIrSk0oEhXh0D8qJKce4luekef62nldtuyGEdXbe9py9uq6k4UBMQ';
  //myHeader = new HttpHeaders().set('Authorization', this.myAccesServiceToken);
  myToken = '';
  constructor() { }
}
