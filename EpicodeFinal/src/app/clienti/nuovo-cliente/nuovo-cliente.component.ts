import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ClientiServiceService } from 'src/app/services/clienti-service.service';

@Component({
  selector: 'app-nuovo-cliente',
  templateUrl: './nuovo-cliente.component.html',
  styleUrls: ['./nuovo-cliente.component.css']
})
export class NuovoClienteComponent implements OnInit {
  title = 'Aggiungi nuovo Cliente';
  idCliente = null;
  nuovoCliente;

  constructor(
    public clientiService: ClientiServiceService,
    public myActRouter: ActivatedRoute,
    public myRouter: Router,
    public myHttp: HttpClient){
  }

  cliente2={
    id: 0,
    ragioneSociale: "Alfonsino",
    partitaIva: "14812266616",
    tipoCliente: "SRL",
    email: "rosalino.caruso@gmail.com",
    pec: "antonio.damico@gmail.com",
    telefono: "+38 855 62 44 5685",
    nomeContatto: "Sarita",
    cognomeContatto: "Serr",
    telefonoContatto: "380.260.3225",
    emailContatto: "armando.martinelli@hotmail.com",
    indirizzoSedeOperativa: {
        id: 2,
        via: "Contrada Gastone 4, Piano 4",
        civico: "698",
        cap: "38615",
        localita: "Vania del friuli",
        comune: {
            id: 1,
            nome: "LASTRA A SIGNA",
            provincia: {
                id: 1,
                nome: "FIRENZE",
                sigla: "FI"
            }
        }
    },
    indirizzoSedeLegale: {
        id: 1,
        via: "Strada Ricci 55, Appartamento 58",
        civico: "925",
        cap: "65995",
        localita: "Ivonne umbro",
        comune: {
            id: 1,
            nome: "LASTRA A SIGNA",
            provincia: {
                id: 1,
                nome: "FIRENZE",
                sigla: "FI"
            }
        }
    },
    dataInserimento: "2021-05-24T08:11:01.911+00:00",
    dataUltimoContatto: "2021-05-24T21:32:06.375+00:00"
}


  ngOnInit(): void {
    this.myActRouter.paramMap
    .subscribe(
      params => {
        this.idCliente = params.get('id');
        console.log(this.idCliente)
        this.nuovoCliente = this.cliente2;
        /*
        {id:0, ragioneSociale: '', partitaIva: '', tipoCliente: '', email: '', pec: '', telefono: '',
        nomeContatto: '', cognomeContatto: '', telefonoContatto: '', emailContatto: '', 
        indirizzoSedeOperativa: {via: '', civico: '', cap:'', localita: '', comune: {nome: '', provincia: {nome: ''}}}}
        */
        this.clientiService.getClienti()
        .subscribe(
          response => {
            console.log(response)
          }
        )
      },
      error => console.log('Errore ' + error),
      () => console.log('Ok')
    )
  }
}