import { Component, OnInit } from '@angular/core';
import { ShippingInfo } from 'src/app/models/shipping-info';
import { ShippingInfoService } from 'src/app/services/shipping-info.service';
import { paymentInfo } from 'src/app/models/paymentInfo';
import { PaymentInfoService } from 'src/app/services/payment.service';
import { CatalogToCartService } from 'src/app/services/catalog-to-cart.service';
import { CartItem } from 'src/app/models/cart-item';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {
  totalMoney : number =0;
  itemArray : string[]=[];
  itemAllName : string ="";
 myPayment : paymentInfo |undefined;
 myShipping : ShippingInfo |undefined;
 myCartInfo : CartItem[] =[];
  constructor(private pis:PaymentInfoService, private sis:ShippingInfoService, private cis: CatalogToCartService){
    this.myPayment=pis.pInfo;
    this.myShipping=sis.shippingInfo;
    this.myCartInfo = cis.cartItems;
    for(let i =0;i<this.myCartInfo.length;i++){
      this.totalMoney += this.myCartInfo[i].price;
      this.itemArray[i]= this.myCartInfo[i].name;
    }
    this.itemAllName = this.itemArray.toString();
  }

  ngOnInit(): void {
  }

}
