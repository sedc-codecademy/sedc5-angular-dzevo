import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Contact } from "../../models/contact";
import { ContactService } from "../../services/contact.service";
@Component({
    selector: "contact-details",
    templateUrl: "./contact-details.component.html"
})
export class ContactDetailsComponent implements OnInit {
    id: string;
    contact: Contact = Contact.empty();
    constructor(private activatedRoute: ActivatedRoute,
        private contactSevice: ContactService) {

    }

    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params[ "id" ];
        this.contactSevice.get(this.id).subscribe(data => {
            this.contact = data;
        });
        console.log(this.contact);

    }
}