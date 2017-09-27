import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Order } from "../../models/order";
import { ProductComponent } from "../";
@Component({
    selector: "order",
    templateUrl: "./order.component.html"
})
export class OrderComponent implements OnInit {
    order: Order;
    counterInOrders: number;

    @ViewChild("productComponentChild")
    childComponent: ProductComponent;

    @ViewChild("heading")
    firstHeadingElement: ElementRef;

    ngOnInit() {
        this.order = Order.empty();
        this.order.id = "order_id_1234567";
        this.order.product.id = "product_id_123123";
        this.order.product.name = "ketchup";
    }

    handleCounterChanged(event: number) {
        this.counterInOrders = event;
        console.log(this.firstHeadingElement);

    }

    copy(obj: any): any {
        return JSON.parse(JSON.stringify(obj));
    }

}