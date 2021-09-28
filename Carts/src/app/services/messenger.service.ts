import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AddToCart } from '../models/add-to-cart';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();

  constructor() { }

  sendMsg(addToCart: AddToCart) {
    this.subject.next(addToCart); //Triggering event
  }

  getMsg() {
    return this.subject.asObservable();
  }
}
