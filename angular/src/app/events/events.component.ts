import { Component, OnInit, ErrorHandler } from '@angular/core';
import { EventsService } from '../services/events.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  allEvents = [];

  constructor(
    private services:EventsService,
    private router:Router) { }

  ngOnInit() {
    this.services.events().subscribe(
      res =>{
        console.log(res);
        this.allEvents = res;
      },
      err =>{
        console.log(err);
        if(err instanceof HttpErrorResponse){
          if(err.status===401){
            this.router.navigate(['/login'])
          }
        }
      }
    )
  }



}
