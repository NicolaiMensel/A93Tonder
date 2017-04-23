import {Component, Input, OnInit} from '@angular/core';
import {Event} from './Event';

@Component({
  selector: 'app-events-view',
  templateUrl: './events-view.component.html',
  styleUrls: ['./events-view.component.css']
})
export class EventsViewComponent implements OnInit {

  @Input()
  events: Array<Event>;

  constructor() {
  }

  ngOnInit() {
    if (!this.events) {
      this.events = new Array<Event>();
    }
  }
}
