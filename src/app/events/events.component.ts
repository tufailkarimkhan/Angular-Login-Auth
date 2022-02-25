import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private eventService:EventService) { }

  allProducts:any=[]
  ngOnInit() {
    console.log('Hello tufail');
    this.eventService.AllProducts()
    .subscribe(
      res=> this.allProducts=res,
      err=> console.log(err)
    )
    
  }

}
