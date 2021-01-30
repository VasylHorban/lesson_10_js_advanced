import { Injectable } from '@angular/core';

import { styles } from './shared/model/styles';

@Injectable({
  providedIn: 'root'
})
export class SketchService {
  private sketch : string = `<h1>If</h1>
  <p>If you can keep your head when all about you</p>
  <p>Are losing theirs and blaming it on you,</p>
  <p>If you can trust yourself when all men doubt you,</p>
  <p>But make allowance for their doubting too; </p>
  <p>If you can wait and not be tired by waiting,</p>
  <p>Or being lied about, don’t deal in lies,</p>
  <p>And yet don’t look too good, nor talk too wise...</p>
  <br>
  <small>by Rudyard Kipling</small>`;

  private default_styles : styles = {
    'font-size' : '14px',
    'font-family' : 'sans-serif',
    'color' : 'black',
    'font-style' : 'normal',
    'font-weight' : 'normal',
    'background' : 'white',
    'text-decoration' : 'inherit'
  }

  constructor() { }

  getText() : string{
    return this.sketch;
  }
  getStyles() : styles {
    return this.default_styles;
  }
}
