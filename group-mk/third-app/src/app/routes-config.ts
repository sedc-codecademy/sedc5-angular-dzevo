import { Routes } from "@angular/router";

import { ContactListConponent } from "../components/contact-list/contact-listconponent";
import { CreateContactConponent } from "../components/create-contact/create-contact.conponent";

export const routes: Routes = [
    { path: 'contact-list', component: ContactListConponent },
    { path: 'create-contact', component: CreateContactConponent },
    { path: "**", component: ContactListConponent }
];