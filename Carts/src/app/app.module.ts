import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentPageComponent } from './components/payment/payment-page.component';
import { SummaryPageComponent } from './components/summary/summary-page.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CatalogComponent } from './components/catalog/catalog.component';
import { FiltersComponent } from './components/catalog/filters/filters.component';
import { ItemsComponent } from './components/catalog/items/items.component';
import { CartComponent } from './components/catalog/cart/cart.component';
import { CartItemComponent } from './components/catalog/cart/cart-item/cart-item.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { ItemComponent } from './components/catalog/items/item/item.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PaymentPageComponent,
    SummaryPageComponent,
    HeaderComponent,
    FooterComponent,
    CatalogComponent,
    FiltersComponent,
    ItemsComponent,
    CartComponent,
    CartItemComponent,
    ItemComponent,
    ShippingComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers:[],

  bootstrap: [AppComponent]
})
export class AppModule { }
