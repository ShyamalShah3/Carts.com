import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartList } from 'src/app/models/cart-list';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartList[] = [];
  cartTotal = 0

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: any)  => {
      this.cartItems.push(new CartList(1, product.id, product.name, 1, product.price));
      this.cartTotal = 0;
      this.cartItems.forEach(item => {
        this.cartTotal += (item.qty * item.price);
      })
    });
  }

}
