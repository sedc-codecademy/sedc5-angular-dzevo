import { Contact } from "../models/contact";
import { Injectable } from "@angular/core";
import { mockContacts } from "./mock/mock-contacts";


@Injectable()
export class ContactsService {
    flag: boolean;

    public getAll(): Array<Contact> {
        return mockContacts;
    }

    public get(id: string): Contact {
        return mockContacts.find(x => x.id === id);
    }

}