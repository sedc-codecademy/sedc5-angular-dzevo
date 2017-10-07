import { Routes } from "@angular/router";
import { ContactListComponent } from "./components/contact-list.component";
import { CreateContactComponent } from "./components/create-contact.component";

export let routes: Routes = [
    { path: "contact-list", component: ContactListComponent },
    { path: "create-contact", component: CreateContactComponent },
    { path: "contact-details/:id", component: CreateContactComponent },
    { path: "**", component: ContactListComponent }
];