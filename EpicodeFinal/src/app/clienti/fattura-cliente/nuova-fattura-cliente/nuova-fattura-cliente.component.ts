import { Component, OnInit } from '@angular/core';
import { FattureServiceService } from 'src/app/services/fatture-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nuova-fattura-cliente',
  templateUrl: './nuova-fattura-cliente.component.html',
  styleUrls: ['./nuova-fattura-cliente.component.css']
})
export class NuovaFatturaClienteComponent implements OnInit {
  title = 'Aggiungi Fattura Cliente';
  idCliente = null;
  nuovaFattura;

  constructor(
    public fattureService: FattureServiceService,
    public myActRouter: ActivatedRoute,
    public myRouter: Router,
    public myHttp: HttpClient) { }

  ngOnInit(): void {
    this.myActRouter.paramMap
    .subscribe(
      params => {
        this.idCliente = params.get('id');
        console.log(this.idCliente)
        this.nuovaFattura = { data: '', numero: '', anno: '', importo: '', stato: {id: 1, nome: ''} };
        this.fattureService.getFatture()
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
