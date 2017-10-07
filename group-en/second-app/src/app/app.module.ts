import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { ContactListComponent } from "./components/contact-list.component";
import { CreateContactComponent } from "./components/create-contact.component";
import { ContactDetailsComponent } from "./components/contact-details.component";
import { ContactsService } from "./services/contacts.service";
import { routes } from "./router.config";
import {} from "Rxjs/add/operator/map"
@NgModule({
  declarations: [
    AppComponent,
    CreateContactComponent,
    ContactListComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [
    ContactsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
