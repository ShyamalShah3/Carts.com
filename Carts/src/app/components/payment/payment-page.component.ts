import { Component, Input, OnInit } from '@angular/core';

import { paymentInfo } from 'src/app/models/paymentInfo';
import { PaymentInfoService } from 'src/app/services/payment.service';


@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
 
  @Input('ngModel') cardName: string | undefined;
  @Input('ngModel') cardNum: string | undefined;
  @Input('ngModel') expDate: string | undefined;
  @Input('ngModel') CVV: string | undefined;
 

  constructor(private service: PaymentInfoService) {
   }

  ngOnInit(): void {
    
     }
  getPayment(){
   
    this.service.pInfo =new paymentInfo( this.cardName ,this.cardNum, this.expDate ,this.CVV);

    //console.log(this.myPayData.pInfo.getCVV);
  }
 
}
