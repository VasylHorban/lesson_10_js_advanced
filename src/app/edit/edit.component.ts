import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input ('sketch') sketch : string ;

  @Output () saveEvent = new EventEmitter();
  @Output () addEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  save() : void{
      this.saveEvent.emit(this.sketch)
  }

  add() : void {
    this.addEvent.emit()
  }

  geneateTag(code : number) : void {
    let tag : string;
    switch (code) {
      case 0:
        tag = '<p></p>'
        break;
      case 1:
        tag = '<h1></h1>'
        break;
      case 2:
        tag = '<h2></h2>'
        break;
      case 3:
        tag = '<h3></h3>'
        break;
      case 4:
        tag = '<h4></h4>'
        break;
      case 5:
        tag = '<h5></h5>'
        break;
      case 6:
        tag = '<h6></h6>'
        break;  
      default:
        tag = `<a href=""></a>`
        break;
    }
    this.sketch += tag;
  }
  
}
