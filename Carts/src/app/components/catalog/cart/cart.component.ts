import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    {id: 1, productId: 1, name: "Test 1", qty: 2, price: 100},
    {id: 2, productId: 2, name: "Test 2", qty: 1, price: 50},
    {id: 3, productId: 3, name: "Test 3", qty: 10, price: 1000}
  ];

  cartTotal = 0

  constructor() { }

  ngOnInit(): void {
    this.cartItems.forEach(item=> {
      this.cartTotal += (item.qty * item.price)
    })
  }

}
