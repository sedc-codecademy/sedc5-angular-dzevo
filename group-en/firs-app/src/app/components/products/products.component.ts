import { Component, Input } from "@angular/core";

@Component({
    selector: "products",
    templateUrl: "./products.component.html"
})
export class ProductsComponent {
    inputData: string = "some initial input "
    private title: string = "asdqwerty";
    private buttonText: string = "click me";
    private product: Product = Product.empty();
    private counter: number = 0;

    @Input()
    private inputText: string = "";

    
    handleClick(e: MouseEvent): void {
        e.stopPropagation();
        e.preventDefault();
        //this.inputText = "asdasd";
        //this.counter++;
        console.log(this.inputText);
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