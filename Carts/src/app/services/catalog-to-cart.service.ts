import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CatalogToCartService {
  private mCartItems: CartItem[] = [];
  private mTotal: number = 0;
  private mtotalItems: number = 0;

  constructor() {
  }

 public get cartItems() : CartItem[] {
    return this.mCartItems;
 }

 public set cartItems(cartItems:CartItem[]) {
   this.mCartItems = cartItems;
   this.getTotalItems();
   this.getTotal();
 }

 private getTotalItems(){
  this.mtotalItems = 0; 
  this.mCartItems.forEach ( item => {
     this.mtotalItems += item.qty;
   });
 }

 private getTotal() {
  this.mTotal = 0;
  this.cartItems.forEach(element => {
    this.mTotal += element.qty * element.price;
  });
 }

 public get totalItems() : number {
   return this.mtotalItems;
 }

 public get total() : number {
   return this.mTotal;
 }

 public set total(total:number) {
   this.mTotal = total;
 }
 
 public removeItem(productId: number) {
  let index = this.mCartItems.map(item => item.productId).indexOf(productId);
  this.mCartItems.splice(index, 1);
  this.getTotal();
  this.getTotalItems();
 }

 public clear(){
   this.mCartItems = [];
   this.mTotal = 0;
   this.mtotalItems = 0;
 }
}
