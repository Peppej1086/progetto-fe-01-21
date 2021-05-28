import { Component, OnInit } from '@angular/core';
import { UtentiServerService } from '../services/utenti-server.service';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {
  title = 'Lista Users';
  utenti;
  constructor(public utentiService: UtentiServerService) { }

  ngOnInit(): void {
    this.utentiService.getUtenti()
    .subscribe(
      response => {
        this.utenti = response;
        console.log(this.utenti);
      },
      error => console.error('error: ' + JSON.stringify(error)),
      () => console.log('Completed')
    );
  }

}