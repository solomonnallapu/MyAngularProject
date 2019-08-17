import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() receivedFromParent;
  @Output() receivedFromParentChange:any = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  notifyParent(){
    this.receivedFromParent ++;
    this.receivedFromParentChange.emit(this.receivedFromParent);
  }
}
