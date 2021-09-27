import { Component, Input, OnInit } from '@angular/core';
import { ShippingInfo } from 'src/app/models/shipping-info';
import { ShippingInfoService } from 'src/app/services/shipping-info.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})


export class ShippingComponent implements OnInit {

  @Input('ngModel') shipStreetAddress: string | undefined;
  @Input('ngModel') shipCity: string | undefined;
  @Input('ngModel') shipZipCode: string | undefined;
  @Input('ngModel') shipState: string | undefined;
  @Input('ngModel') shipCountry: string | undefined;
  @Input('ngModel') shipEmail: string | undefined;
  @Input('ngModel') shippingMethod: string = "Regular"; //gave this a value since I wasn't sure if the default item would be passed in via onShippingMethodChange

  constructor(private service:ShippingInfoService) { }

  ngOnInit(): void {
  }

  packageShippingInfo() {
    this.service.shippingInfo = new ShippingInfo(0, this.shipStreetAddress, this.shipCity, this.shipZipCode, this.shipState, this.shipCountry, this.shipEmail, this.shippingMethod);
  }

  onShippingMethodChange(event: Event) {
    this.shippingMethod = (event.target as HTMLInputElement).value;
  }



}
