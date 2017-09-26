import { ViewChild, Component } from '@angular/core';
import { Product, ProductsComponent } from "./components/products/products.component"
@Component({
  selector: 'app-root',
  template: `
  <button (click)="handleClick()" >do something</button>
  <h1>productID at parentComponent: {{product.id}}</h1>
  <products #child [productChild]="product"
  (productChanged)="handleProductChanged($event)"
  ></products>
`
})
export class AppComponent {
  product: Product = { id: "ketchup" };

  @ViewChild("child")
  childProductComponent: ProductsComponent;

  handleClick() {
    console.log(this.childProductComponent);
  }

  handleProductChanged(e: Product): void {

    console.log(e);
    this.product = e;
  }
}
