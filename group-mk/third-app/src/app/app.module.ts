import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router"
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { routes } from "./routes-config";
// or
import { AppComponent } from './app.component';
import { CreateContactConponent } from "../components/create-contact/create-contact.conponent";
import { ContactListConponent } from "../components/contact-list/contact-listconponent";
@NgModule({
  declarations: [
    AppComponent,
    CreateContactConponent,
    ContactListConponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
