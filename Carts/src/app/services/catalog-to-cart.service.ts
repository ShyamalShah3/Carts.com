import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CatalogToCartService {
  private mCartItems: CartItem[] = [];

  constructor() {
  }

 public get cartItems() : CartItem[] {
    return this.mCartItems;
 }

 public set cartItems(cartItems:CartItem[]) {
   this.mCartItems = cartItems;
 }

}
