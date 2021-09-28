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
  date: string = "";
  cardNumber: string | undefined;

  constructor(private pis: PaymentInfoService, private sis: ShippingInfoService, private ctc: CatalogToCartService) { 
    this.myPayment = pis.pInfo;
    this.cardNumber = this.pis.pInfo?.lastFour;
    this.myShipping = sis.shippingInfo;
    this.myCartItems = ctc.cartItems;
    this.myCartTotal = ctc.total;
    this.date = this.getDate();
  }

  ngOnInit(): void {
  }

  onReturnToCatalog() {
    this.pis.pInfo?.clear();
    this.sis.shippingInfo?.clear();
    this.ctc.clear();
  }

  getDate(): string {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //As January is 0.
    let yyyy = today.getFullYear();
    return mm+"/"+dd+"/"+yyyy;
  }
}
