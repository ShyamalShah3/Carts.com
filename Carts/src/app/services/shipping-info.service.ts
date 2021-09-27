import { Injectable } from '@angular/core';
import { ShippingInfo } from 'src/app/models/shipping-info';

@Injectable({
  providedIn: 'root'
})
export class ShippingInfoService {
  private mShippingInfo:(ShippingInfo | null) = null;

  constructor() { }

  public get shippingInfo() : (ShippingInfo | null) {
    return this.mShippingInfo;
  }

  public set shippingInfo(shippingInfo:(ShippingInfo | null)) {
    this.mShippingInfo = shippingInfo;
  }
  
}
