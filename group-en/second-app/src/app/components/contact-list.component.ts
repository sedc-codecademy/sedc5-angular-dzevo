import { Component, OnInit } from "@angular/core"
import { Contact } from "../models/contact";
import { ContactsService } from "../services/contacts.service";
import { Router } from "@angular/router";
@Component({
    selector: "contact-list",
    templateUrl: "./contact-list.component.html"
})
export class ContactListComponent implements OnInit {



    contactList: Array<Contact> = [];

    constructor(private contactService: ContactsService,
        private router: Router) { }

    ngOnInit() {
        this.contactService.getAll().subscribe(data => {
            this.contactList = data;
        });
    }
    navigateToDetails(id: string) {
        this.router.navigate([ "contact-details", id ]);
    }
}