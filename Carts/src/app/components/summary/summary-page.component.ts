import { Component, OnInit } from '@angular/core';
import { ShippingInfo } from 'src/app/models/shipping-info';
import { ShippingInfoService } from 'src/app/services/shipping-info.service';
import { paymentInfo } from 'src/app/models/paymentInfo';
import { PaymentInfoService } from 'src/app/services/payment.service';
import { CatalogToCartService } from 'src/app/services/catalog-to-cart.service';
import { CartItem } from 'src/app/models/cart-item';
@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {
 myPayment : paymentInfo |undefined;
 myShipping : ShippingInfo |undefined;
 myCartInfo : CartItem[] =[];
  constructor(private pis:PaymentInfoService, private sis:ShippingInfoService, private cis: CatalogToCartService){
    this.myPayment=pis.pInfo;
    this.myShipping=sis.shippingInfo;
    this.myCartInfo = cis.cartItems;
    //console.log(this.myShipping?.emailAddress);
  }

  ngOnInit(): void {
  }

}
