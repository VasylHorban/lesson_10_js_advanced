import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { table } from '../shared/model/table';
import { list } from '../shared/model/list';

@Component({
  selector: 'app-create-table-list',
  templateUrl: './create-table-list.component.html',
  styleUrls: ['./create-table-list.component.css']
})
export class CreateTableListComponent implements OnInit {
  public showCode : number = 1;
  public showListCode : number = 1;
  public exampleSketch : string = '';
  
  @Output() returnData = new EventEmitter();

  public table : table = {
    'border-color' : '#3b3b3b',
    'border-type' : 'solid',
    'border-width' : null,
    'count-td' : null,
    'count-tr' : null,
    'height-td' : null,
    'width-td' : null
  };

  public list : list = {
    'count-li' : null,
    'mark-type-ul' : 'circle',
    'mark-type-ol' : 'decimal'
  
  }

  constructor() { }

  ngOnInit(): void {
  }

  sendTable() : void {
    let result = this.createTable();
    this.returnData.emit(result)
  }

  createTable() : string {
    let output : string;
    output =  `<table style = "border : ${this.table['border-width']}px ${this.table['border-type']} ${this.table['border-color']}" > `;
    for( let i = 0; i < +this.table['count-tr'] ; i++){
      output += '<tr>'
      for (let k = 0 ; k < +this.table['count-td'] ; k++ ){
        output += `<td style = "width : ${this.table['width-td']}px ; height : ${this.table['height-td']}px ;">A</td>`
      }
      output +='</tr>'

    }
    output += '</table>'
    return output
  }

  sendList(code : number) : void {
    let result = this.createList(code);
    this.returnData.emit(result)
  }
  createList(code : number) : string {
    let output : string;
    let tag : string;
    let style : string;
    if(code === 1) {
      tag = 'ol';
      style = this.list['mark-type-ol'];
    }else if(code === 2){
      tag = 'ul';
      style = this.list['mark-type-ul'];
    }
    output = `<${tag}>`;
    for(let i = 0; i < +this.list['count-li']; i++){
      output += `<li style = "list-style-type : ${style}">List item (${i+1})</li>`
    }
    output += `</${tag}>`
    return output;
  }



  exampleCheck() {
    let result : string;
    if(this.showCode === 1){
      result = this.createTable();
    }else if(this.showCode === 2){
      result = this.createList(this.showListCode)
    }
    this.exampleSketch = result;
  }






}

