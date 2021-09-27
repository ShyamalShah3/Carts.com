import { Injectable } from '@angular/core';
import { ShippingInfo } from 'src/app/models/shipping-info';

@Injectable({
  providedIn: 'root'
})
export class ShippingInfoService {
  private mShippingInfo:ShippingInfo;

  constructor(shippingInfo:ShippingInfo) { 
    this.mShippingInfo = shippingInfo;
  }

  public get shippingInfo() : ShippingInfo {
    return this.mShippingInfo;
  }
  
}
