import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private eventUrl = 'http://localhost:3000/api/events';
  private specialEventUrl = 'http://localhost:3000/api/special';

  constructor(private http:HttpClient) { }

  events(){
    return this.http.get<any>(this.eventUrl);
  }

  specialEvents(){
    return this.http.get<any>(this.specialEventUrl);
  }

}
