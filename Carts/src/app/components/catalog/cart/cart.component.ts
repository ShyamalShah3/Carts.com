import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartItem } from 'src/app/models/cart-item';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];
  cartTotal = 0

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: any)  => {
      this.cartItems.push(new CartItem(1, product.id, product.name, 1, product.price));
      this.cartTotal = 0;
      this.cartItems.forEach(item => {
        this.cartTotal += (item.qty * item.price);
      })
    });
  }

}
