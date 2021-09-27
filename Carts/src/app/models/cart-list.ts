export class CartList {
    id: number;
    productId: number;
    name: string;
    qty: number;
    price: number;

    constructor(id: number, productId: number, name: string, qty: number, price: number){
        this.id = id;
        this.productId = productId;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
}
