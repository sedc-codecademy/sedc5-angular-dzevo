import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Contact } from "../models/contact";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class ContactService {
    private baseUrl: string;
    private contactsRoute: string;

    constructor(private http: Http) {
        this.baseUrl = "http://10.80.30.195:3000";
        this.contactsRoute = this.baseUrl + "/contacts"
    }

    getAll(): Observable<Contact[]> {
        return this.http.get(this.contactsRoute)
            .map(res => {
                let result = res.json() as Contact[];
                return result;
            }, error => { console.warn(error); });
    }

    get(id: string) {
        return this.http.get(this.contactsRoute + "/" + id)
            .map(res => {
                let result = res.json() as Contact;
                return result;
            }, error => { console.warn(error); });
    }

    create(contact: Contact) {
        if (contact) {
            return this.http.post(this.contactsRoute, contact)
                .map(res => {
                    let result = res.json() as Contact;
                    return result;
                }, error => { console.warn(error); });
        }
        return Observable.of(null);
    }

    update(contact: Contact) {
        if (contact && contact.id) {
            return this.http.put(this.contactsRoute + "/" + contact.id, contact)
                .map(res => {
                    let result = res.json() as Contact;
                    return result;
                }, error => { console.warn(error); });
        }
        return Observable.of(null);
    }


}