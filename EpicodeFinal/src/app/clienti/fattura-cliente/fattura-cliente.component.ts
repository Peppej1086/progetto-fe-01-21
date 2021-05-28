import { Component, OnInit } from '@angular/core';
import { ClientiServiceService } from 'src/app/services/clienti-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fattura-cliente',
  templateUrl: './fattura-cliente.component.html',
  styleUrls: ['./fattura-cliente.component.css']
})
export class FatturaClienteComponent implements OnInit {
  title = 'Totale fatture cliente';
  id;
  idListaFattura;
  cliente;
  pageSize = 20;
  page = 1;
  constructor(
    public clientiService: ClientiServiceService,
    public myActRouter: ActivatedRoute){}

  ngOnInit(): void {
    this.myActRouter.paramMap
    .subscribe(
      params => {
        this.id = params.get('id');
        console.log(this.id)
        this.clientiService.getFattureCliente(this.id)
        .subscribe(
          response => {
            console.log(response);
            this.idListaFattura = response['content'];
          }
        )
      },
      error => console.error('error: ' + JSON.stringify(error)),
      () => console.log('Completed')
    )
  }

}
