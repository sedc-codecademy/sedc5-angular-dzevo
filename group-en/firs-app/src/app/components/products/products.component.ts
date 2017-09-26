import { Component } from "@angular/core";

@Component({
    selector: "products",
    templateUrl: "./products.component.html"
})
export class ProductsComponent {
    inputData: string = "some initial input "
    private title: string = "asdqwerty";
    private buttonText: string = "click me";
    private product: Product = Product.empty();

    handleClick(e: any): void {
        console.log(e);
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