import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { styles } from '../shared/model/styles';

@Component({
  selector: 'app-stylization',
  templateUrl: './stylization.component.html',
  styleUrls: ['./stylization.component.css']
})
export class StylizationComponent implements OnInit {
  public checked = {
    bold : false,
    cursive : false,
    line : false
  }

  private colorCode : number;

  public openPalette : boolean = false;

  @Output() styleEvent = new EventEmitter();

  @Input() styles : styles;

  constructor() { }

  ngOnInit(): void {
  }

  onInput(){
    console.log(this.styles)
    this.styleEvent.emit(this.styles)
  }

  onChecked(){
    if( this.checked.bold ) this.styles['font-weight'] = 'bold';
    else this.styles['font-weight'] = 'normal';
    if(this.checked.cursive) this.styles['font-style'] = 'italic';
    else this.styles['font-style'] = 'normal';
    if(this.checked.line) this.styles['text-decoration'] = 'underline';
    else this.styles['text-decoration'] = 'inherit';
    this.onInput();
  }

  bgColor(){
    this.openPalette = true
    this.colorCode = 1;
  }
  textColor(){
    this.openPalette = true
    this.colorCode = 2;

  }

  addColor(data : string) {
    this.openPalette = false;
    switch (this.colorCode) {
      case 1:
        this.styles.background = data;
        break;
      case 2:
        this.styles.color = data
    }
    console.log(this.styles)
    this.onInput();
  }

}
