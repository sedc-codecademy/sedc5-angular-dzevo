import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Todo } from "../../models/todo"

@Component({
    selector: "todo",
    templateUrl: "./todo.component.html"
})
export class TodoComponent implements OnInit {

    @ViewChild("todoForm")
    todoForm: NgForm;

    @Output()
    todoSubmited: EventEmitter<Todo> = new EventEmitter<Todo>();
    @Output()
    todoCanceled: EventEmitter<any> = new EventEmitter<any>();

    @Input()
    todoItem: Todo;

    isControlValid(ngFormReference: NgForm, controlName: string): boolean {
        return (ngFormReference.controls[ controlName ] && ngFormReference.controls[ controlName ].valid) ? true : false;
    }
    constructor() {
        this.todoItem = new Todo();
    }

    ngOnInit() {
    }
    cancel() {
        this.todoCanceled.emit();
    }
    submit() {
        this.todoSubmited.emit(this.todoItem);
    }

}