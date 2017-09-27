export * from './main.component';
export * from "./product/product.component";
export * from "./generated/generated.component";

import { GeneratedComponent, MainComponent, ProductComponent } from "./";

export let COMPONENTS = [ GeneratedComponent, ProductComponent ];