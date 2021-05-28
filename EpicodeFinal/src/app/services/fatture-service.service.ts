import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FattureServiceService {
  urlFatture = 'https://epicode.online/epicodebeserviceunauth/api/fatture?page=1&size=100&sort=id,ASC';
  urlModificaFatture = 'https://epicode.online/epicodebeserviceunauth/api/fatture/';
  //urlModificaFattCliente = 'https://epicode.online/epicodebeserviceunauth/api/fatture/cliente/';
  urlModificaFattCliente = 'https://epicode.online/epicodebeserviceunauth/api/fatture/';
  fatture;
  page;
  constructor(
    public httpFatture: HttpClient,
    public myRouter: Router){ 
  }
  getFatture(event?){
    if(event != null) { 
      this.page = event -1
      this.urlFatture = "https://epicode.online/epicodebeserviceunauth/api/fatture?page="+ this.page +"&size=100&sort=id";
    }
    return this.httpFatture.get(this.urlFatture)
  }

  modificaFattura(id: number, fattura: any){
    this.httpFatture.put(this.urlModificaFatture + id, fattura)
    .subscribe(
      response => {
        console.log('put ' + JSON.stringify(response))
      }
    )
  }

  loadSingleFattura(idFattura) {
    return  this.httpFatture.get(this.urlModificaFattCliente + idFattura)
  }

  aggiungiFattura(nuovaFattura: any){
    console.log(nuovaFattura)
    this.httpFatture.post(this.urlModificaFatture, nuovaFattura)
    .subscribe(
      response => {
        console.log('Post ' + JSON.stringify(response))
      }
    )
    //this.myRouter.navigate(['clienti/fattura/{{c.id}}']);
  }
  /*
  loadSingleCliente(idClienti) {
    this.HttpClienti.get(this.urlClienti + idClienti)
      .subscribe(
        response => { console.log(response), this.editCliente = response },
        error => console.error('error: ' + JSON.stringify(error)),
        () => console.log('completed')
      )
  }
  */
}
