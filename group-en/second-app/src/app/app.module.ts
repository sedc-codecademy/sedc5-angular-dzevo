import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ContactListComponent} from "./components/contact-list.component";
import { CreateContactComponent} from "./components/create-contact.component";
@NgModule({
  declarations: [
    AppComponent,
    CreateContactComponent,
    ContactListComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
