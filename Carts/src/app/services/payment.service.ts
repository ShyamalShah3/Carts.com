import { Injectable } from '@angular/core';
import { paymentInfo } from 'src/app/models/paymentInfo';

@Injectable({
  providedIn: 'root'
})

export class PaymentInfoService {
  private mP:paymentInfo;

  constructor(p:paymentInfo) { 
    this.mP = p;
  }

  public get shippingInfo() : paymentInfo {
    return this.mP;
  }
  
}
