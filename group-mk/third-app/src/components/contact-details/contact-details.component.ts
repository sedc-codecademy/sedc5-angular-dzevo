import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Contact } from "../../models/contact";

@Component({
    selector: "contact-details",
    templateUrl: "./contact-details.component.html"
})
export class ContactDetailsComponent implements OnInit {
    id: string;
    contact: Contact = Contact.empty();
    constructor(private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params[ "id" ];
    }
}