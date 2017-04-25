import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { Md2Module }  from 'md2';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    Md2Module.forRoot(),
    appRouting
  ],
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
