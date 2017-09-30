import { Component, OnInit, Input } from "@angular/core";

import { Todo } from "../../models/todo"

@Component({
    selector: "todo-row",
    templateUrl: "./todo-row.component.html"
})
export class TodoRowComponent implements OnInit {

    @Input()
    todo: Todo;

    ngOnInit() {

    }
}