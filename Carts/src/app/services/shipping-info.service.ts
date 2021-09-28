import { Injectable } from '@angular/core';
import { ShippingInfo } from 'src/app/models/shipping-info';

@Injectable({
  providedIn: 'root'
})
export class ShippingInfoService {
  private mShippingInfo: ShippingInfo = new ShippingInfo();

  constructor() { }

  public get shippingInfo() : ShippingInfo {
    return this.mShippingInfo;
  }

  public set shippingInfo(shippingInfo:ShippingInfo) {
    this.mShippingInfo = shippingInfo;
  }
  

}
