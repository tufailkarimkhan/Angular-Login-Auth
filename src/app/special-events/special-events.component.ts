import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  constructor(private eventService:EventService) { }

  ngOnInit(): void {
  }
  message:any
  addProduct(value:any){
    return this.eventService.Product(value)
    .subscribe(
      res=> alert(res),
      err=> console.log(err)
      
    )
  }

}
