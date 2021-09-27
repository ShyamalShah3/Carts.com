import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CatalogToCartService {

  cartItems: CartItem[] = [];

  constructor(cartItems: CartItem[]) {
    this.cartItems = cartItems;
  }

  getCartItems(){
    return this.cartItems;
  }
}
