import { Component, OnInit } from '@angular/core';
import { ClientiServiceService } from '../services/clienti-service.service';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit {
  title = 'Clienti';
  clienti;
  pageSize = 20;
  page = 1;
  constructor(public clientiService: ClientiServiceService) { }
  
  ngOnInit(): void {
    this.clientiService.getClienti()
    .subscribe(
      response => {
        this.clienti = response;
        console.log(this.clienti);
      },
      error => console.error('error: ' + JSON.stringify(error)),
      () => console.log('Completed')
    );
  }
  myPageChange(event){
    console.log("myPageChange" + event)
    this.clientiService.getClienti(event)
    .subscribe(
      response => { 
        console.log(response); 
        this.clienti = response; 
      },
      error => console.log("Error" + error),
      () => console.log("Fine")
    )
  }
}