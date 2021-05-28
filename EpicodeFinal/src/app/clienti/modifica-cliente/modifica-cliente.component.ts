import { Component, OnInit } from '@angular/core';
import { ClientiServiceService } from 'src/app/services/clienti-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modifica-cliente',
  templateUrl: './modifica-cliente.component.html',
  styleUrls: ['./modifica-cliente.component.css']
})
export class ModificaClienteComponent implements OnInit {
  title = 'Modifica Cliente';
  clienti;
  clienteDaModificare: any = null;
  idCliente;
  constructor(
    public clientiService: ClientiServiceService,
    public myActRouter: ActivatedRoute,
    public myRouter: Router,
    public myHttp: HttpClient){
  }

  ngOnInit(): void {
    this.myActRouter.paramMap
    .subscribe(
      params => {
        this.idCliente = params.get('id');
        this.clientiService.getClienti()
        .subscribe(
          response => {
            this.clienti = response['content'];
            this.clienteDaModificare = this.clienti.find(c => c.id == this.idCliente);
            console.log(this.clienteDaModificare);
          }
        )
      },
      error => console.log('Error' + error),
      () => console.log('Ok')
    )
  }
  salvaModificheCliente(){
    this.clientiService.modificaCliente(this.idCliente, this.clienteDaModificare)
    this.myRouter.navigate(['clienti']);
  }
}
