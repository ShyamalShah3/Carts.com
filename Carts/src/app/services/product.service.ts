import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, "Two-Tier Cart", "This is a two tier shopping cart.", 100, "https://m.media-amazon.com/images/I/61COlmcV7yL._SL1000_.jpg"),
    new Product(2, "Heavy Duty Small Cart", "This is a small heavy duty metal shopping cart.", 190.5, "https://cdna3.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000//auto_image/compress/https://s3.amazonaws.com/zcom-media/sites/a0i0L00000TM7fPQAT/media/catalog/product/s/m/small-metal-shopping-cart-angle.jpg"),
    new Product(3, "Liquor Store Cart", "This is a modern Liquor Store Cart.", 130, "https://cdna3.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000//auto_image/compress/https://s3.amazonaws.com/zcom-media/sites/a0i0L00000TM7fPQAT/media/catalog/product/m/o/modern-liquor-store-shopping-cart-30.gif.gif"),
    new Product(4, "Two-Tier 4", "This is a two tier shopping cart", 160.7, "https://m.media-amazon.com/images/I/61COlmcV7yL._SL1000_.jpg"),
    new Product(5, "Two-Tier 5", "This is a two tier shopping cart", 200.0, "https://m.media-amazon.com/images/I/61COlmcV7yL._SL1000_.jpg"),
    new Product(5, "Bubbles", "Bubbles", 9000.0)
  ];

  constructor() {}
  getProducts(): Product[] {
    //To-do: get products from API and return an observable
    return this.products;
  }
}