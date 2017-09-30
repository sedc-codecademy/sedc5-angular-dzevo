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

    isControlValid(ngFormReference: NgForm, controlName: string): boolean {
        return (ngFormReference.controls[ controlName ] && ngFormReference.controls[ controlName ].valid) ? true : false;
    }

    ngOnInit() {
        if (this.todoForm && this.todoForm.control) {

        }

        this.todoItem = new Todo();
    }

    submit() {
        console.log(this.todoForm);
        console.log(this.todoForm.controls);
        console.log(this.todoForm.controls[ "title" ]);
        console.log(this.todoForm.controls[ "title" ].valid);


    }

}