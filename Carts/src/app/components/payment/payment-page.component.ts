import { Component, Inject, Injectable, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { paymentInfo } from 'src/app/models/paymentInfo';
import { ShippingInfo } from 'src/app/models/shipping-info';
import { PaymentInfoService } from 'src/app/services/payment.service';
import { ShippingInfoService } from 'src/app/services/shipping-info.service';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';


@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
@Injectable({
  providedIn: 'root'
})

export class PaymentPageComponent implements OnInit {

  @Injectable()

  private payInfo:paymentInfo ;
  private myShipping : ShippingInfo;
  configUrl="http://localhost:9080/payment-processing/credit-card-processing/payment";

  @Input('ngModel') payForm:FormGroup;


  constructor(private service: PaymentInfoService, private shipping: ShippingInfoService, private http: HttpClient) {
    this.myShipping = shipping.shippingInfo
    this.payInfo = service.pInfo;
    let cardNumRegex :string = "[0-9]{16}"
    let CVVRegex : string  = "[0-9]{3}"
    let expDateRegex : string = "[0-9][1-9]/[0-9][1-9]";    
    this.payForm = new FormGroup({nameOnCard: new FormControl(this.payInfo.CardName,[Validators.required]),
                                  numOnCard: new FormControl(this.payInfo.CardNum,[Validators.required,Validators.pattern(cardNumRegex)]),
                                  expDate: new FormControl(this.payInfo.ExpD,[Validators.required,Validators.pattern(expDateRegex)]),
                                  cvv: new FormControl(this.payInfo.cvv,[Validators.required,Validators.pattern(CVVRegex)]),
    });
   
    console.log(this.payForm.touched);

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
    this.postData();
  }

  postData(){
    let data = {
      "cardName": this.payInfo.CardName,
      "cardNum": this.payInfo.CardNum,
      "expiration": this.payInfo.ExpD,
      "cvv": this.payInfo.cvv
    }
    let result = from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        this.configUrl,
        {
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST', 
          mode: 'no-cors'
        }
      )
    );
    result.subscribe(x => console.log(x));
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
