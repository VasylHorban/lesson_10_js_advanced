import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btns',
  templateUrl: './btns.component.html',
  styleUrls: ['./btns.component.css']
})
export class BtnsComponent implements OnInit {
  
  @Output() editEvent = new EventEmitter();
  @Output() styleEvent = new EventEmitter();
  @Output() blockEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  edit(){
    this.editEvent.emit();
  }
  style(){
    this.styleEvent.emit();
  }
  block() {
    this.blockEvent.emit();
  }

}
