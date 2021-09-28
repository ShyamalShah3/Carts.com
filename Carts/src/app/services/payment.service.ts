import { Injectable } from '@angular/core';
import { paymentInfo } from 'src/app/models/paymentInfo';

@Injectable({
  providedIn: 'root'
})

export class PaymentInfoService {
  private myPayment:paymentInfo | undefined;

  constructor() { 
    
  }

  public get pInfo() : paymentInfo |undefined {
    return this.myPayment;
  }
  public set pInfo(myPInfo:paymentInfo | undefined) {
    this.myPayment = myPInfo;
  }

}
