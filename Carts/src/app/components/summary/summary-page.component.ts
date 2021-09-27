import { Component, OnInit,Input } from '@angular/core';
import { paymentInfo } from 'src/app/models/paymentInfo';
import { PaymentInfoService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {
  @Input() myPayment!: PaymentInfoService;
  constructor(){
    
   }

  ngOnInit(): void {
    console.log(this.myPayment.pInfo.CVV);
  }

}
