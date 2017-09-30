import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ToDo } from "../../../models";

@Component({
    selector: "todo",
    templateUrl: "./todo.component.html"
})
export class TodoComponent implements OnInit {
    public static idCounter: number = 1;
    @Input()
    todo: ToDo;
    
    @ViewChild('todoForm')
    ngFormElement: HTMLFormElement;

    @ViewChild('todoForm')
    ngForm: NgForm;

    submit() {
        console.log(this.ngForm)
    }
    handleKeyUp(event: HTMLFormElement) {
        console.log(event);

        this.ngOnInit();
    }

     info (){
         console.log(this.ngFormElement);
         console.log(this.ngFormElement.classList);
        return this.ngFormElement.classList;
    }

    ngOnInit(): void {
        this.todo = new ToDo();
        this.todo.id = "asdasdasd" + TodoComponent.idCounter++;

    }
}