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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ConfirmationItemComponent } from './components/confirmation/confirmation-item/confirmation-item.component';
import { SummaryItemsComponent } from './components/summary/summary-items/summary-items.component';
import { ShoppingCartItemComponent } from './components/shopping-cart/shopping-cart-item/shopping-cart-item.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';


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
    ShoppingCartComponent,
    ConfirmationComponent,
    ConfirmationItemComponent,
    SummaryItemsComponent,
    ShoppingCartItemComponent,
    ContactUsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[],

  bootstrap: [AppComponent]
})
export class AppModule { }
