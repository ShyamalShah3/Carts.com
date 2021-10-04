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
  private shipInfo: ShippingInfo;
  @Input('ngModel') shipForm:FormGroup;
 
  constructor(private service:ShippingInfoService) { 
    this.shipInfo = service.shippingInfo;
    let emailRegex:string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";
    let streetAddressRegex:string = "[0-9]+ [a-zA-Z ]+";
    this.shipForm = new FormGroup({shipStreetAddress: new FormControl(this.shipInfo.streetAddress, [Validators.required, Validators.pattern(streetAddressRegex)]),  
                                  shipCity: new FormControl(this.shipInfo.city, [Validators.required]), 
                                  shipZipCode: new FormControl(this.shipInfo.zipCode, [Validators.required]), 
                                  shipState: new FormControl(this.shipInfo.state, [Validators.required]),
                                  shipCountry: new FormControl(this.shipInfo.country, [Validators.required]),
                                  shipEmail: new FormControl(this.shipInfo.emailAddress, [Validators.required, Validators.pattern(emailRegex)]),
                                });
  }
  

  ngOnInit(): void {
  }

  private packageShippingInfo() {
    this.shipInfo.streetAddress = this.streetAddressForm?.value;
    this.shipInfo.city = this.cityForm?.value;
    this.shipInfo.zipCode = this.zipCodeForm?.value;
    this.shipInfo.state = this.stateForm?.value;
    this.shipInfo.country = this.countryForm?.value;
    this.shipInfo.emailAddress = this.emailForm?.value;
  }

  public onCancelClick() {
    this.packageShippingInfo();
  }

  public onNextClick() {
    this.packageShippingInfo();
  }

  /** When the radio button for shipping method is changed, the value will be saved in the model. */
  public onShippingMethodChange(event: Event) {
    this.shipInfo.shippingMethod = (event.target as HTMLInputElement).value;
  }

  get streetAddressForm() {
    return this.shipForm.get('shipStreetAddress');
  }

  get cityForm() {
    return this.shipForm.get('shipCity');
  }

  get zipCodeForm() {
    return this.shipForm.get('shipZipCode');
  }

  get stateForm() {
    return this.shipForm.get('shipState');
  }

  get countryForm() {
    return this.shipForm.get('shipCountry');
  }

  get emailForm() {
    return this.shipForm.get('shipEmail');
  }



}
