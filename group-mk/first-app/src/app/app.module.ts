import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainComponent,GeneratedComponent, COMPONENTS } from "./";
import {AccordionModule,ModalModule} from "ngx-bootstrap";
let moduleInfo = {
  declarations: [
    MainComponent,
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    FormsModule
   // AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [ MainComponent ]
};

@NgModule(moduleInfo)
export class AppModule { }

// var a =6;
// var b = a;
// a = 6;


// var a:Product[] =[p1,p2];
// var b:Product[] =[...a];

// b.lastname = a.lastname
// b.name = a.name

// b= {};

// let arr1=[a,b];
// let arrCopy = [...arr1];
