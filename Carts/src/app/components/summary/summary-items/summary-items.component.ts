import { Component,Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-summary-items',
  templateUrl: './summary-items.component.html',
  styleUrls: ['./summary-items.component.css']
})
export class SummaryItemsComponent implements OnInit {
  @Input() cartItem!: CartItem;

  constructor() { }

  ngOnInit(): void {
  }

}
