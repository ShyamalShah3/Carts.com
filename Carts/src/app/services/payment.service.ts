import { Injectable } from '@angular/core';
import { Payment } from 'src/app/models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  Payment = new Payment('','','','');
  constructor() { }
  getPayment():void{
    this.Payment.nameOnCard =(document.getElementById("cc-name") as HTMLInputElement).value;
    this.Payment.cardNumber =(document.getElementById("cc-number") as HTMLInputElement).value;
    this.Payment.expDate =(document.getElementById("cc-expiration") as HTMLInputElement).value;
    this.Payment.CVV =(document.getElementById("cc-cvv") as HTMLInputElement).value;
  }
}
