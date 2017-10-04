import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap';
// or
import { AppComponent } from './app.component';
import { CreateContactConponent } from "../components/create-contact/create-contact.conponent";
@NgModule({
  declarations: [
    AppComponent,
    CreateContactConponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
