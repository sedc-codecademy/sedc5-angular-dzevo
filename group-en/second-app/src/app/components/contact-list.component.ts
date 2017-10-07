import { Component, OnInit } from "@angular/core"
import { Contact } from "../models/contact";
import { ContactsService } from "../services/contacts.service";

@Component({
    selector: "contact-list",
    templateUrl: "./contact-list.component.html"
})
export class ContactListComponent implements OnInit {



    contactList: Array<Contact> = [];

    constructor(private contactService: ContactsService) { }

    ngOnInit() {
        this.contactList = this.contactService.getAll();
    }

}