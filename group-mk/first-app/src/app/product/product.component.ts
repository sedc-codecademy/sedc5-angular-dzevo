import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../../models/product"

@Component({
    selector: "product",
    templateUrl: "./product.component.html"
})
export class ProductComponent {

    @Input()
    product: Product = Product.empty();

    @Output()
    counterChanged: EventEmitter<number> = new EventEmitter<number>();

    counter: number = 0;
    someText: string = "hello";

    handleButtonClick(e: MouseEvent): void {
        this.counterChanged.emit(++this.counter);
    }
}