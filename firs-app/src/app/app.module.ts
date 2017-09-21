import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { ProductsComponent } from "./components/products/products.component";
import { UsersComponent } from "./users/users.component";
let obj = {
  declarations: [
    AppComponent,
    ProductsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AccordionModule.forRoot()
  ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
};
@NgModule(obj)
export class AppModule { }

