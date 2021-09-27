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

  constructor(private ctcServe:CatalogToCartService) { 
    this.cartItems = ctcServe.cartItems;
    this.cartItems.forEach(element => {
      this.cartTotal += element.qty * element.price;
    });
  }

  ngOnInit(): void {
    
  }

}
