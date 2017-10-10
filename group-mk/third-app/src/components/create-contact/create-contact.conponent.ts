import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Contact } from "../../models/contact";
import { ContactService } from "../../services/contact.service";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "create-contact",
    templateUrl: "./create-contact.conponent.html"
})
export class CreateContactConponent implements OnInit {


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
    constructor(private fb: FormBuilder,
        private contactService: ContactService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        let id = this.activatedRoute.snapshot.params[ "id" ];
        if (id) {
            this.contactService.get(id).subscribe(data => {
                if (data) {
                    this.contact = data;
                    this.contactForm.setValue({ fullName: data.fullName, phoneNumber: data.phoneNumber });

                }
            });
        } else {
            this.contact = Contact.empty();
        }
    }

    contactForm: FormGroup = this.fb.group({
        fullName: [ "", [ Validators.required ] ],
        phoneNumber: [ "", [ Validators.required ] ]
    });


    createContact(e): void {

        this.contact.fullName = this.contactForm.value[ "fullName" ];
        this.contact.phoneNumber = this.contactForm.value[ "phoneNumber" ];
        console.log(this.contact);
        if (this.contact.id) {
            this.contactService.update(this.contact).subscribe(data => {
                if (data) {
                    this.router.navigate([ "contact-list" ]);
                } else {
                    alert("something went wrong");
                }
            });
        } else {
            this.contactService.create(this.contact).subscribe(data => {
                if (data) {
                    this.router.navigate([ "contact-list" ]);
                } else {
                    alert("something went wrong");
                }
            });
        }
    }
    @Input()
    contact: Contact = Contact.empty();
}

