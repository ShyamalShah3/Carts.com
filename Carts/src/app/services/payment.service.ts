import { Injectable } from '@angular/core';
import { paymentInfo } from 'src/app/models/paymentInfo';

@Injectable({
  providedIn: 'root'
})

export class PaymentInfoService {
  private myPayment:paymentInfo;

  constructor(p:paymentInfo) { 
    this.myPayment = p;
  }

  public get pInfo() : paymentInfo {
    return this.myPayment;
  }
  
}
