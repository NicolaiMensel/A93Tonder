import { Component, OnInit } from '@angular/core';
import {Event} from './Event';
import {EventsService} from '../BLL/events.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Array<Event>;
  constructor(private eventService: EventsService) {
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

}
