export class CartItem {
    id: number;
    productId: string;
    name: string;
    qty: number;
    price: number;
    url: string;
    description: string;

    constructor(id: number, productId: string, name: string, qty: number, price: number, url: string, description: string){
        this.id = id;
        this.productId = productId;
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.url = url;
        this.description = description;
    }
}
