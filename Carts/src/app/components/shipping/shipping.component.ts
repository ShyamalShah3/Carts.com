import { Component, OnInit } from '@angular/core';
import { ShippingInfo } from 'src/app/models/shipping-info';
import { ShippingInfoService } from 'src/app/services/shipping-info.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(private service:ShippingInfoService) { }

  ngOnInit(): void {
  }

  packageShippingInfo(streetAddress:string, city:string, zipCode:string, state:string, country:string, email:string) {
    this.service.shippingInfo = new ShippingInfo(0,streetAddress,city,zipCode,state,country);
  }



}
