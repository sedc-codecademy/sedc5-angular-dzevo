import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TodoComponent} from "../components/todo/todo.component";
import { TodoRowComponent } from "../components/todo-row/todo-row.component";
import { TodoListComponent } from "../components/todo-list/todo-list.component";
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoRowComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
