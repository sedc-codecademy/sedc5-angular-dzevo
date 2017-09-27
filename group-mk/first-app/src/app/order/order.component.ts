import { Component, OnInit } from "@angular/core";
import { Order } from "../../models/order";
@Component({
    selector: "order",
    templateUrl: "./order.component.html"
})
export class OrderComponent implements OnInit {
    order: Order;

    ngOnInit() {
        this.order = Order.empty();
        this.order.id = "order_id_1234567";
        this.order.product.id = "product_id_123123";
        this.order.product.name = "ketchup";
    }

    copy(obj:any):any{
        return JSON.parse(JSON.stringify(obj));
    }

}