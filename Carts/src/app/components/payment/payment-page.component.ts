import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {


  constructor(private paymentService:PaymentService) { }
  
  ngOnInit(): void {
   this.paymentService.getPayment();
   console.log(this.paymentService.Payment.CVV);
   
  }

}
