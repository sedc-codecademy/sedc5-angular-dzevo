import { Component, ViewChild, Input } from "@angular/core";
import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Contact } from "../../models/contact";

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// or
@Component({
    selector: "create-contact",
    templateUrl: "./create-contact.conponent.html"
})
export class CreateContactConponent {
    minDate = new Date(2017, 5, 10);
    maxDate = new Date(2018, 9, 15);
    _bsValue: Date;
    get bsValue(): Date {
        return this._bsValue;
    }

    set bsValue(v: Date) {
        console.log(v);
        this._bsValue = v;
    }

    _bsRangeValue: any = [ new Date(2017, 7, 4), new Date(2017, 7, 20) ];
    get bsRangeValue(): any {
        return this._bsRangeValue;
    }

    set bsRangeValue(v: any) {
        this._bsRangeValue = v;
    }

    log(v: any) { console.log(v); }
    constructor(private fb: FormBuilder) {

    }

    contactForm: FormGroup = this.fb.group({
        fullName: [ "", [ Validators.minLength(3) ] ],
        phoneNumber: [ "", [ Validators.required ] ]
    });


    createContact(e): void {
        console.log(e);
        console.log(this.contactForm.value);
    }
    @Input()
    contact: Contact = Contact.empty();
}

