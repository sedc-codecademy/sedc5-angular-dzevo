import { ViewChild, Component } from '@angular/core';
import { Product, ProductsComponent } from "./components/products/products.component"
@Component({
  selector: 'app-root',
  templateUrl : "./app.component.html"
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
