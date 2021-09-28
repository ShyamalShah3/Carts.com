import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-confirmation-item',
  templateUrl: './confirmation-item.component.html',
  styleUrls: ['./confirmation-item.component.css']
})
export class ConfirmationItemComponent implements OnInit {

  @Input() cartItem!: CartItem;

  constructor() { }

  ngOnInit(): void {
  }

}
