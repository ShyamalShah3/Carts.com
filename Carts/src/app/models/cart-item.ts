export class CartItem {
    id: number;
    productId: number;
    name: string;
    qty: number;
    price: number;
    url: string;

    constructor(id: number, productId: number, name: string, qty: number, price: number, url: string){
        this.id = id;
        this.productId = productId;
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.url = url;
    }
}
