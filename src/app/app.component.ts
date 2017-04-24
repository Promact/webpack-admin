import { Component } from '@angular/core';
import '../assets/css/styles.css';

//Temporary solution to Cannot find name 'require' error
declare var require: any

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
