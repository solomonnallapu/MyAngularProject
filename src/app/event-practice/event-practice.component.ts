import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-practice',
  templateUrl: './event-practice.component.html',
  styleUrls: ['./event-practice.component.scss']
})
export class EventPracticeComponent implements OnInit {

  constructor() { }
  myNumber:number=5;
  ngOnInit() {
  }
  receivedEvent(event){
    console.log('Received Event', event);
    this.myNumber = event;
   
  }
}
