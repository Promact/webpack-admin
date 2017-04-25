import { Component, ViewEncapsulation } from '@angular/core';
import '../assets/scss/styles.scss';

//Temporary solution to Cannot find name 'require' error
declare var require: any

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [ require('./app.component.scss') ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent { }
