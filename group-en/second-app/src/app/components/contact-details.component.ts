import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Contact } from "../models/contact";
import { ContactsService } from "../services/contacts.service";

@Component({
    selector: "contact-details",
    templateUrl: "./contact-details.component.html"
})
export class ContactDetailsComponent implements OnInit {

    contact: Contact = Contact.empty();
    id: string;
    constructor(private contactsService: ContactsService,
        private activatedROute: ActivatedRoute,
        private router: Router) {
    }

    async ngOnInit() {
        this.id = this.activatedROute.snapshot.params[ "id" ];
        let contactFromService = await this.contactsService.get(this.id);
        if (contactFromService) {
            this.contact = contactFromService;
        } else {
            this.router.navigate([ "contact-list" ]);
        }
    }

}