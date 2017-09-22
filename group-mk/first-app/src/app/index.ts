export * from './main.component';
export * from "./product/product-list.component";
export * from "./generated/generated.component";

import { GeneratedComponent, MainComponent, ProductListComponent } from "./";

export let COMPONENTS = [ GeneratedComponent, ProductListComponent ];