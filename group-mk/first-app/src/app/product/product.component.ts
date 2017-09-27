import { Component } from "@angular/core";
import { Product } from "../../models/product"

@Component({
    selector: "product",
    templateUrl: "./product.component.html"
})
export class ProductComponent {

    product: Product = Product.empty(); 
    someText: string = "hello";


    constructor(){
        this.product = new Product();
        this.product.name = "ketchup";
        this.product.id = "asdasd";
    }
}