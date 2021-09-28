import { Component, Input, OnInit } from '@angular/core';
import { ShippingInfo } from 'src/app/models/shipping-info';
import { ShippingInfoService } from 'src/app/services/shipping-info.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})

export class ShippingComponent implements OnInit {
  @Input('ngModel') shipInfo: ShippingInfo;
 
  constructor(private service:ShippingInfoService) { 
    this.shipInfo = service.shippingInfo;
  }

  ngOnInit(): void {
  }

  /** When the radio button for shipping method is changed, the value will be saved in the model. */
  public onShippingMethodChange(event: Event) {
    this.shipInfo.shippingMethod = (event.target as HTMLInputElement).value;
  }



}
