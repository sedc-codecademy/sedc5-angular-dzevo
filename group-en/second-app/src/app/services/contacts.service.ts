import { Contact } from "../models/contact";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { } from "rxjs/add/operator/map";
import { Injectable } from "@angular/core";
import { mockContacts } from "./mock/mock-contacts";


@Injectable()
export class ContactsService {

    constructor(private http: Http) {

    }

    public getAll() {
        return this.http.get("http://10.80.30.195:3000/contacts")
            .map(res => res.json() as Contact[],
            error => { console.warn(error); });
    }

    public get(id: string): Observable<Contact> {
        return this.http.get("http://10.80.30.35:3000/contacts/" + id)
            .map(res => {
                var result = res.json() as Contact;
                console.log(result);
                return result;
            }, error => {
                console.warn(error);
            });
    }

}