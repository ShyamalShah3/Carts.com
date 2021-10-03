import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CatalogToCartService } from 'src/app/services/catalog-to-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems:CartItem[] = [];
  cartTotal = 0;
  totalItems = 0;

  constructor(public ctc:CatalogToCartService) { 
    this.cartItems = ctc.cartItems;
    this.cartTotal = ctc.total;
    this.totalItems = ctc.totalItems;
  }

  ngOnInit(): void {
    
  }

  public clearCart() {
    this.ctc.clear();
  }

}
