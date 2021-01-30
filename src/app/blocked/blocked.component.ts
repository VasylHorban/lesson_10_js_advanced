import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-blocked',
  templateUrl: './blocked.component.html',
  styleUrls: ['./blocked.component.css']
})
export class BlockedComponent implements OnInit {

  public valid : boolean = true;
  public password : string = 'admin';

  @Output() blockEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  check(data : string): void {
    if(data === this.password) {
      this.blockEvent.emit();
      this.valid = true;
    }else {
      this.valid = false;
    }
  }

}
