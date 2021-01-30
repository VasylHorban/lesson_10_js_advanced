import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  public isOpen : boolean = true;
  
  @Input () sketch : string;
  constructor() { }


  ngOnInit(): void {
  }

}
