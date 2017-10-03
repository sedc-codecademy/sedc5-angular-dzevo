import { Component, ViewChild, OnInit, Input } from "@angular/core"
import { NgForm, FormGroup, FormControl } from "@angular/forms";
import { Contact } from "../models/contact";
@Component({
    selector: "create-contact",
    templateUrl: "./create-contact.component.html"
})
export class CreateContactComponent implements OnInit {
    @Input()
    contact: Contact = Contact.empty();
    
    contactForms: FormGroup = new FormGroup({
        name: new FormControl(),
        phoneNumber: new FormControl()
    });

    ngOnInit() {
        console.log(this.contactForms);
    }

}