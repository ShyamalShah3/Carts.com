import { Component, OnInit } from '@angular/core';
import { paymentInfo } from 'src/app/models/paymentInfo';
import { PaymentInfoService } from 'src/app/services/payment.service';


@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
  myPayData:PaymentInfoService= new PaymentInfoService(new paymentInfo);
  constructor() {
   }

  ngOnInit(): void {
    
     }
  getPayment(){
    var name = (<HTMLInputElement>document.getElementById("cc-name")).value;

    var number = (<HTMLInputElement>document.getElementById("cc-number")).value;
  
    var expD = (<HTMLInputElement>document.getElementById("cc-expiration")).value;
  
    var cvv = (<HTMLInputElement>document.getElementById("cc-cvv")).value;

    this.myPayData=new PaymentInfoService(new paymentInfo(name,number,expD,cvv));

    console.log(this.myPayData.pInfo.getCVV);
  }
}
