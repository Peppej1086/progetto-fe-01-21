import { Component, OnInit } from '@angular/core';
import { FattureServiceService } from '../services/fatture-service.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit {
  title = "Fatture";
  fatture;
  pageSize = 20;
  page = 1;
  constructor(public fattureService: FattureServiceService){}
  
  ngOnInit(): void {
    this.fattureService.getFatture()
    .subscribe(
      response => {
        this.fatture = response;
        console.log(this.fatture);
      },
      error => console.error('error: ' + JSON.stringify(error)),
      () => console.log('Completed')
    );
  }
  myPageChange(event){
    console.log("myPageChange" + event)
    this.fattureService.getFatture(event)
    .subscribe(
      response => { 
        console.log(response); 
        this.fatture = response; 
      },
      error => console.log("Error" + error),
      () => console.log("Fine")
    )
  }

}
