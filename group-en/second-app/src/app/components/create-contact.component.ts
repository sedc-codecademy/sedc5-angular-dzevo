import { Component, ViewChild, OnInit, Input } from "@angular/core"
import { NgForm } from "@angular/forms";
import { Contact } from "../models/contact";
@Component({
    selector: "create-contact",
    templateUrl: "./create-contact.component.html"
})
export class CreateContactComponent implements OnInit {
    @Input()
    contact: Contact = Contact.empty();
    
    @ViewChild("contactForm")
    contactForms: NgForm;

    ngOnInit() {
        console.log(this.contactForms);
     }

}