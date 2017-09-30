import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Todo } from "../../models/todo"

@Component({
    selector: "todo-list",
    templateUrl: "./todo-list.component.html"
})
export class TodoListComponent implements OnInit {


    todoItems: Array<Todo>;
    todoToEdit: Todo;


    edit(todo: Todo) {
        this.todoToEdit = JSON.parse(JSON.stringify(todo));
    }
    cancelEdit() {
        this.todoToEdit = null;
    }

    update(todo: Todo) {
        var index = this.todoItems.findIndex(x => x.id == todo.id);
        this.todoItems[ index ] = JSON.parse(JSON.stringify(todo));
        this.todoToEdit = null;

    }
    ngOnInit() {
        this.todoItems = [
            {
                id: "id1",
                title: "title1",
                description: "desc1"
            },
            {
                id: "id2",
                title: "title2",
                description: "desc2"
            },
            {
                id: "id3",
                title: "title3",
                description: "desc3"
            }
        ];
    }

    addNew() {

    }


}