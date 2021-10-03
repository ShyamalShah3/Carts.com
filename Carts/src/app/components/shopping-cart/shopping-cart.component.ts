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

  constructor(private ctcServe:CatalogToCartService) { 
    this.cartItems = ctcServe.cartItems;
    this.cartTotal = ctcServe.total;
    this.totalItems = ctcServe.totalItems;
  }

  ngOnInit(): void {
    
  }

}
