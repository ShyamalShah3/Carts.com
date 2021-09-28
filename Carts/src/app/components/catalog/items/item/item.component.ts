import { Component, OnInit, Input} from '@angular/core';
import { AddToCart } from 'src/app/models/add-to-cart';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() productItem!: Product;
  @Input('ngModel') qty: number | undefined;

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.msg.sendMsg(new AddToCart(this.productItem, this.qty));
  }

}
