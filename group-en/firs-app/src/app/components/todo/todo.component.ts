import { Component, OnInit, Input } from "@angular/core";
import { ToDo } from "../../../models";

@Component({
    selector: "todo",
    templateUrl: "./todo.component.html"
})
export class TodoComponent implements OnInit {
    public static idCounter: number = 1;
    @Input()
    todo: ToDo;

    ngOnInit(): void {
        this.todo = new ToDo();
        this.todo.id = "asdasdasd" + TodoComponent.idCounter++;


    }
}