import { Component, OnInit } from '@angular/core';
import { FattureServiceService } from 'src/app/services/fatture-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-modifica-fattura-cliente',
  templateUrl: './modifica-fattura-cliente.component.html',
  styleUrls: ['./modifica-fattura-cliente.component.css']
})
export class ModificaFatturaClienteComponent implements OnInit {
  title='Modifica Fattura Cliente';
  listaFatture;
  fatturaDaModificare: any = null;
  idFattura;
  constructor(
    public fattureService: FattureServiceService,
    public myActRouter: ActivatedRoute,
    public myRouter: Router,
    public myHttp: HttpClient){
  }

  ngOnInit(): void {
    this.myActRouter.paramMap
    .subscribe(
      params => {
        this.idFattura = params.get('id');
        this.fattureService.loadSingleFattura(this.idFattura)
        .subscribe(
          response => { 
            console.log(response); 
            this.fatturaDaModificare = response 
          },
          error => console.error('error: ' + JSON.stringify(error)),
          () => console.log('completed')
        )
        /*
        this.fattureService.getFatture()
        .subscribe(
          response => {
            this.fatture = response['content'];
            this.fatturaDaModificare = this.fatture.find(f => f.id == this.idFattura);
            console.log(this.fatturaDaModificare);
          }
        )
        */
      },
      error => console.log('Error' + error),
      () => console.log('Ok')
    )
    /*
    this.myActRouter.paramMap
    .subscribe(
      params => {
        this.idFattura = params.get('id');
        console.log('id fatt'+ this.idFattura)
        this.fattureService.getFatture()
        .subscribe(
          response => {
            this.listaFatture = response['content'];
            console.log(this.listaFatture)
            this.fatturaDaModificare = this.listaFatture.find(f => f.id == this.idFattura);
            console.log(this.fatturaDaModificare);
          }
        )
      },
      error => console.log('Error' + error),
      () => console.log('Ok')
    )
    */
  }
  salvaModifiche(){
    this.fattureService.modificaFattura(this.idFattura, this.fatturaDaModificare)
    //this.myRouter.navigate(['clienti/fattura/']);
  }
}
