import { Component, OnInit, Input } from "@angular/core"
import { Contact } from "../models/contact";
@Component({
    selector: "create-contact",
    templateUrl: "./create-contact.component.html"
})
export class CreateContactComponent implements OnInit {
    @Input()
    contact: Contact = Contact.empty();

    ngOnInit() { }

}