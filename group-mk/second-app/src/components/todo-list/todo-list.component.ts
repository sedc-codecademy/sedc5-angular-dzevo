import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Todo } from "../../models/todo"

@Component({
    selector: "todo-list",
    templateUrl: "./todo-list.component.html"
})
export class TodoListComponent implements OnInit {


    todoItem: Array<Todo>;

    isControlValid(ngFormReference: NgForm, controlName: string): boolean {
        return (ngFormReference.controls[ controlName ] && ngFormReference.controls[ controlName ].valid) ? true : false;
    }

    ngOnInit() {
      
    }

    addNew() {
      
    }

    edit(){
        
    }

}