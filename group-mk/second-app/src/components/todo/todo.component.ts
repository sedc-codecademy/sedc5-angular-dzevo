import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Todo } from "../../models/todo"

@Component({
    selector: "todo",
    templateUrl: "./todo.component.html"
})
export class TodoComponent implements OnInit {

    @ViewChild("todoForm")
    todoForm: NgForm;

    todoItem: Todo;

    ngOnInit() {
        this.todoItem = new Todo();
    }

    submit(){
        console.log(this.todoForm)
        console.log(this.todoForm.valid)
    }

}