import { Component, OnInit } from '@angular/core';
import { PaymentInfoService } from 'src/app/services/payment.service';
import { paymentInfo } from 'src/app/models/paymentInfo';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {
   myPayment: paymentInfo;
  constructor(private pis: PaymentInfoService) {
    this.myPayment=pis.pInfo;
   }

  ngOnInit(): void {
  }

}
