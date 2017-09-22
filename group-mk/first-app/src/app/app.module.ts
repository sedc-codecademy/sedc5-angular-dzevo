import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from "./product/product-list.component";
import { GeneratedComponent} from "./generated/generated.component";
let moduleInfo = {
  declarations: [
    AppComponent,
    ProductListComponent,
    GeneratedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ AppComponent, ProductListComponent,
  GeneratedComponent ]
};

@NgModule(moduleInfo)
export class AppModule { }
