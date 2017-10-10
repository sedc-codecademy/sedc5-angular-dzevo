import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Contact } from "../models/contact";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class ContactService {


    constructor(private http: Http) {

    }

    getAll(): Observable<Contact[]> {
        return this.http.get("http://10.80.30.195:3000/contacts")
            .map(res => {
                let result = res.json() as Contact[];
                return result;
            }, error => { console.warn(error); });
    }

    get(id: string) {
        return this.http.get("http://10.80.30.195:3000/contacts/" + id)
            .map(res => {
                let result = res.json() as Contact;
                return result;
            }, error => { console.warn(error); });
    }
}