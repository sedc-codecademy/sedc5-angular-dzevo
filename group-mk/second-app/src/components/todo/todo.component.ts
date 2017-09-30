import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from "@angular/core";
import { NgForm, FormControl, FormGroup } from "@angular/forms";
import { Todo } from "../../models/todo"

@Component({
    selector: "todo",
    templateUrl: "./todo.component.html"
})
export class TodoComponent implements OnInit {

    @Input()
    todoItem: Todo;
    todoForm = new FormGroup({
        title: new FormControl(),
        description: new FormControl()
    });

    // @ViewChild("todoForm")
    // todoForm: NgForm;

    @Output()
    todoSubmited: EventEmitter<Todo> = new EventEmitter<Todo>();
    @Output()
    todoCanceled: EventEmitter<any> = new EventEmitter<any>();

    handleSubmit(event) {
        console.log(event);
    }

    isControlValid(ngFormReference: NgForm, controlName: string): boolean {
        return (ngFormReference.controls[ controlName ] && ngFormReference.controls[ controlName ].valid) ? true : false;
    }
    
    constructor() {
        this.todoItem = new Todo();
    }

    ngOnInit() {
        console.log(this.todoItem);
        this.todoForm.setValue({
            title: this.todoItem.title,
            description: this.todoItem.description
        });
    }

    cancel() {
        this.todoCanceled.emit();
    }
    submit() {
        var todo = new Todo();
        todo.id = this.todoItem.id;
        todo.title = this.todoForm.value.title;
        todo.description = this.todoForm.value.description;
        console.log(todo);
        this.todoSubmited.emit(todo);
    }

}