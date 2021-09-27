import { Observable } from "rxjs";

export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id:number, name:string, description:string = '', price:number = 0, imageUrl:string = "https://d31wcbk3iidrjq.cloudfront.net/kg2Hp-CYk_Screenshot_20170729-174311.jpg"){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }

}
