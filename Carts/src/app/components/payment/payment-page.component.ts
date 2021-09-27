import { Component, OnInit } from '@angular/core';
import { paymentInfo } from 'src/app/models/paymentInfo';
import { PaymentInfoService } from 'src/app/services/payment.service';


@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
