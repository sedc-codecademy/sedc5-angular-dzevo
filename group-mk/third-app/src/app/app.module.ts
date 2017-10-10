import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router"
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { routes } from "./routes-config";
import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import { CreateContactConponent } from "../components/create-contact/create-contact.conponent";
import { ContactListConponent } from "../components/contact-list/contact-listconponent";
import { ContactDetailsComponent } from "../components/contact-details/contact-details.component";
import { ContactService } from "../services/contact.service";
import { } from "Rxjs/add/operator/map"
@NgModule({
  declarations: [
    AppComponent,
    CreateContactConponent,
    ContactListConponent,
    ContactDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    HttpModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
