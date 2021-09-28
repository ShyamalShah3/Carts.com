import { Injectable } from '@angular/core';
import { ShippingInfo } from 'src/app/models/shipping-info';

@Injectable({
  providedIn: 'root'
})
export class ShippingInfoService {
  private mShippingInfo: ShippingInfo | undefined;

  constructor() { }

  public get shippingInfo() : ShippingInfo | undefined {
    return this.mShippingInfo;
  }

  public set shippingInfo(shippingInfo:ShippingInfo | undefined) {
    this.mShippingInfo = shippingInfo;
  }

}
