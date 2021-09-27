import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CatalogToCartService } from 'src/app/services/catalog-to-cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];
  cartTotal = 0;

  constructor(private msg: MessengerService, private ctcServe:CatalogToCartService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: any)  => {this.addProductToCart(product)});
  }

  addProductToCart(product: Product) {
    let itemExists = false;

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId == product.id){
        this.cartItems[i].qty++;
        itemExists = true;
        break;
      }
    }

    if (!itemExists){
      this.cartItems.push(new CartItem(1, product.id, product.name, 1, product.price));
      this.cartTotal = 0;
      this.cartItems.forEach(item => {
        this.cartTotal += (item.qty * item.price);
      })
    }
    
    this.goToCart();
  }

  goToCart() {
    this.ctcServe.cartItems = this.cartItems;
    this.ctcServe.total = this.cartTotal;
  }

}
