import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CatalogToCartService } from 'src/app/services/catalog-to-cart.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  private mCartItems: CartItem[] = [];
  private mTotal: number = 0;
  private mtotalItems: number = 0;
  
  constructor(private ctc:CatalogToCartService) { 
    this.mCartItems = ctc.cartItems;
    this.mTotal = ctc.total;
    this.mtotalItems = ctc.totalItems;
  }

  ngOnInit(): void {
  }

}
