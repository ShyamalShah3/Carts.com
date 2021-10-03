import { Component, Input, OnInit } from '@angular/core';
import { CatalogToCartService } from 'src/app/services/catalog-to-cart.service';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input() cartItem!: any;
  constructor(private ctc:CatalogToCartService) { }

  ngOnInit(): void {
  }

  public removeItem(productId: number) {
    this.ctc.removeItem(productId);
  }
}
