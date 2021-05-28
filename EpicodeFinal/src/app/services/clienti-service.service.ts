import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClientiServiceService {
  url = 'https://epicode.online/epicodebeserviceunauth/api/clienti?page=0&size=113&sort=id,ASC';
  urlModificaClienti = 'https://epicode.online/epicodebeserviceunauth/api/clienti/';
  urlFatturaCliente = 'https://epicode.online/epicodebeserviceunauth/api/fatture/cliente/';
  urlClientiToken = 'https://epicode.online/epicodebeservice/api/clienti/';
  clienti;
  page;
  
  myAccesServiceToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMTEiLCJpYXQiOjE2MjIyMDg2NzcsImV4cCI6MTYyMzA3MjY3N30.3qU1910purx4BgdQuxx-r6nRYJtPv2JulkIrSk0oEhXh0D8qJKce4luekef62nldtuyGEdXbe9py9uq6k4UBMQ';
  myHeader = new HttpHeaders().set('Authorization', this.myAccesServiceToken);
  constructor(
    public httpClienti: HttpClient,
    public myRouter: Router){
  }

  getClienti(event?){
    if(event != null) { 
      this.page = event -1
      this.url = "https://epicode.online/epicodebeserviceunauth/api/clienti?page="+ this.page +"&size=20&sort=id";
    }
    //return this.httpClienti.get(this.urlClientiToken, {headers: this.myHeader})
    return this.httpClienti.get(this.url)
  }

  getFattureCliente(id: any){
    return this.httpClienti.get(this.urlFatturaCliente + id + '?page=0&size=113&sort=id,ASC')
  }

  modificaCliente(id: number, cliente: any){
    this.httpClienti.put(this.urlModificaClienti + id, cliente)
    .subscribe(
      response => {
        console.log('put ' + response)
      }
    )
  }

  aggiungiCliente(nuovoCliente: any){
    console.log(nuovoCliente)
    this.httpClienti.post(this.urlModificaClienti, nuovoCliente)
    .subscribe(
      response => {
        console.log('Post ' + JSON.stringify(response))
      }
    )
    this.myRouter.navigate(['clienti']);
  }
}
