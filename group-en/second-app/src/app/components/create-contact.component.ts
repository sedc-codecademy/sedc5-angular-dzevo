import { Component, ViewChild, OnInit, Input } from "@angular/core"
import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Contact } from "../models/contact";
@Component({
    selector: "create-contact",
    templateUrl: "./create-contact.component.html"
})
export class CreateContactComponent implements OnInit {
    @Input()
    contact: Contact = Contact.empty();

    constructor(private fb: FormBuilder) {

    }

    contactForms = this.fb.group({
        name: [ "", [ Validators.maxLength(5), Validators.required ] ],
        phoneNumber: ""
    });

    ngOnInit() {
        console.log(this.contactForms);
    }

}