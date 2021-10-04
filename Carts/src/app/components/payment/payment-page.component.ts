
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { paymentInfo } from 'src/app/models/paymentInfo';
import { PaymentInfoService } from 'src/app/services/payment.service';


@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  private payInfo:paymentInfo ;
  @Input('ngModel') payForm:FormGroup;


  constructor(private service: PaymentInfoService) {
    this.payInfo = service.pInfo;
    let cardNumRegex :string = "[0-9]{16}"
    let CVVRegex : string  = "[0-9]{3}"
    let expDateRegex : string = "[0-9][1-9]/[0-9][1-9]";    
    this.payForm = new FormGroup({nameOnCard: new FormControl(this.payInfo.CardName,[Validators.required]),
                                  numOnCard: new FormControl(this.payInfo.CardNum,[Validators.required,Validators.pattern(cardNumRegex)]),
                                  expDate: new FormControl(this.payInfo.ExpD,[Validators.required,Validators.pattern(expDateRegex)]),
                                  cvv: new FormControl(this.payInfo.cvv,[Validators.required,Validators.pattern(CVVRegex)]),
    });
    console.log(this.cardNameForm?.value);
  }

  ngOnInit(): void {
    
     }
  private packagePaymentInfo() {
    this.payInfo.CardName = this.cardNameForm?.value;
    this.payInfo.CardNum = this.cardNumForm?.value;
    this.payInfo.ExpD = this.cardExpDForm?.value;
    this.payInfo.cvv = this.cardCVVForm?.value;

  }

  public onNextClick() {
    this.packagePaymentInfo();
  }

  get cardNameForm(){
    return this.payForm.get("nameOnCard");
  }
  get cardNumForm(){
    return this.payForm.get("numOnCard");
  }
  get cardExpDForm(){
    return this.payForm.get("expDate");
  }
  get cardCVVForm(){
    return this.payForm.get("cvv");
  }
 
}
