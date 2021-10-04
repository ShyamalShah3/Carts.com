import { Injectable } from '@angular/core';
import { paymentInfo } from 'src/app/models/paymentInfo';

@Injectable({
  providedIn: 'root'
})

export class PaymentInfoService {
  private myPayment:paymentInfo= new paymentInfo() ;

  constructor() {}

  public get pInfo() : paymentInfo {
    return this.myPayment;
  }
  public set pInfo(myPInfo:paymentInfo) {
    this.myPayment = myPInfo;
  }

}
