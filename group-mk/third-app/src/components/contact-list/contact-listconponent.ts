import { Component, OnInit } from "@angular/core";
import { Contact } from "../../models/contact";
import { Router } from "@angular/router";
import { ContactService } from "../../services/contact.service";

@Component({
    selector: "contact-list",
    templateUrl: "./contact-list.conponent.html"
})
export class ContactListConponent implements OnInit {
    contactList: Contact[] = [];

    constructor(private router: Router,
        private contactService: ContactService) {

    }

    navigateToDetails(id: string) {
        this.router.navigate([ "contact-details", id ]);
    }

    ngOnInit() {
        this.contactService.getAll().subscribe(data=>{
            console.log(data);
            this.contactList = data;
        });
    }
}

