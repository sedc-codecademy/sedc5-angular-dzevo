import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { ContactListComponent } from "./components/contact-list.component";
import { CreateContactComponent } from "./components/create-contact.component";
import { ContactsService } from "./services/contacts.service";
import { routes } from "./router.config";
@NgModule({
  declarations: [
    AppComponent,
    CreateContactComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ContactsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
