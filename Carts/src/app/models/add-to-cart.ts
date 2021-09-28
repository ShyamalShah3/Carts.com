import { Product } from "./product";

export class AddToCart {
    constructor(public mProduct: Product, public mQty: number=-1){
    }
}
