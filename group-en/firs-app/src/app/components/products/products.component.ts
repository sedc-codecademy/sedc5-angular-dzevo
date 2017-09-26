import { ElementRef, EventEmitter, Component, Input, Output, ViewChild } from "@angular/core";

@Component({
    selector: "products",
    templateUrl: "./products.component.html"
})
export class ProductsComponent {
    private buttonText: string = "click me";

    @Input()
    private productChild: Product = Product.empty();

    @Output()
    productChanged: EventEmitter<Product> = new EventEmitter();

    @Input()
    private inputText: string = "asd";

    @ViewChild("clickMeButton")
    button: ElementRef;


    handleClick(e: MouseEvent): void {
        e.stopPropagation();
        e.preventDefault();

        console.log(this.button.nativeElement);

        // let productToBeEmittedToParent: Product = { id: this.inputText };
        // this.productChanged.emit(productToBeEmittedToParent);

    }
}


export class Product {
    public id: string;

    constructor() {
    }

    public static empty(): Product {
        return {
            id: "default-id"
        };
    }
}