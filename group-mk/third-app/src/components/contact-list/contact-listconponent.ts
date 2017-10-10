import { Component, OnInit } from "@angular/core";
import { Contact } from "../../models/contact";
import { Router } from "@angular/router";
@Component({
    selector: "contact-list",
    templateUrl: "./contact-list.conponent.html"
})
export class ContactListConponent implements OnInit {
    contactList: Contact[] = [];

    constructor(private router: Router) {

    }

    navigateToDetails(id: string) {
        this.router.navigate([ "contact-details", id ]);
    }

    ngOnInit() {
        this.contactList = [
            {
                id: "asdasd",
                fullName: "jon doe",
                phoneNumber: "+12345678"
            },
            {
                id: "qweretawe",
                fullName: "jon not doe",
                phoneNumber: "+987654321"
            }
        ];
    }
}

