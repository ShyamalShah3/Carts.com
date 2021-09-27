import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CatalogToCartService {
  private mCartItems: CartItem[] = [];
  private mTotal: number = 0;

  constructor() {
  }

 public get cartItems() : CartItem[] {
    return this.mCartItems;
 }

 public set cartItems(cartItems:CartItem[]) {
   this.mCartItems = cartItems;
 }

 public get total() : number {
   return this.mTotal;
 }

 public set total(total:number) {
   this.mTotal = total;
 }

}
