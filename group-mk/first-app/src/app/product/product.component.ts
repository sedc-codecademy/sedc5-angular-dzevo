import { Component, Input } from "@angular/core";
import { Product } from "../../models/product"

@Component({
    selector: "product",
    templateUrl: "./product.component.html"
})
export class ProductComponent {
    
    @Input()
    product: Product = Product.empty(); 

    someText: string = "hello";

    constructor(){
       
    }
}