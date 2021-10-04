import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShippingInfo } from 'src/app/models/shipping-info';
import { ShippingInfoService } from 'src/app/services/shipping-info.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})

export class ShippingComponent implements OnInit {
  @Input('ngModel') shipInfo: ShippingInfo;
  @Input('ngModel') shipForm:FormGroup;
  public validForm:boolean = true;
 
  constructor(private service:ShippingInfoService) { 
    this.shipInfo = service.shippingInfo;
    
    let streetAddressRegex:string = "[0-9]+ [a-zA-Z ]+";
    this.shipForm = new FormGroup({shipStreetAddress: new FormControl(this.shipInfo.streetAddress, [Validators.required, Validators.pattern(streetAddressRegex)]) })
    console.log(this.shipForm.valid);
  }

  ngOnInit(): void {
  }



  /** When the radio button for shipping method is changed, the value will be saved in the model. */
  public onShippingMethodChange(event: Event) {
    this.shipInfo.shippingMethod = (event.target as HTMLInputElement).value;
  }

  get streetAddressForm() {
    return this.shipForm.get('shipStreetAddress');
  }



}
