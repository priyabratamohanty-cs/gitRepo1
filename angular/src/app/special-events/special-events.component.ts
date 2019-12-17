import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  specialEvents = [];

  constructor(
    private service:EventsService,
    private router:Router) { }

  ngOnInit() {
    this.service.specialEvents().subscribe(
      res =>{
        console.log(res);
        this.specialEvents = res;
      },
      err =>{
        if(err instanceof HttpErrorResponse){
          if(err.status===401 || err.status===500){
            this.router.navigate(['/login']);
          }
        }
      }
    )
  }

}
