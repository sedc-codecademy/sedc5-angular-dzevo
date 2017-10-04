import { Component, ViewChild, Input } from "@angular/core";
import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Contact } from "../../models/contact";
@Component({
    selector: "create-contact",
    templateUrl: "./create-contact.conponent.html"
})
export class CreateContactConponent {

    constructor(private fb: FormBuilder) {

    }

    contactForm: FormGroup = this.fb.group({
        fullName: [ "", [ Validators.minLength(3) ] ],
        phoneNumber: [ "", [ Validators.required ] ]
    });

    @Input()
    contact: Contact = Contact.empty();
}

