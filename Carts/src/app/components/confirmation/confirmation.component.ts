import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { paymentInfo } from 'src/app/models/paymentInfo';
import { ShippingInfo } from 'src/app/models/shipping-info';
import { CatalogToCartService } from 'src/app/services/catalog-to-cart.service';
import { PaymentInfoService } from 'src/app/services/payment.service';
import { ShippingInfoService } from 'src/app/services/shipping-info.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  myPayment : paymentInfo |undefined;
  myShipping : ShippingInfo |undefined;
  myCartItems : CartItem[] = [];
  myCartTotal : number = 0
  constructor(private pis: PaymentInfoService, private sis: ShippingInfoService, private ctc: CatalogToCartService) { 
    this.myPayment = pis.pInfo;
    this.myShipping = sis.shippingInfo;
    this.myCartItems = ctc.cartItems;
    this.myCartTotal = ctc.total;
  }

  ngOnInit(): void {
  }

  onReturnToCatalog() {
    this.pis.pInfo?.clear();
    this.sis.shippingInfo?.clear();
    this.ctc.clear();
  }


}
