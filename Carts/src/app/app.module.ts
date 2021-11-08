import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ContactUsConfirmationComponent } from './components/contact-us/contact-us-confirmation/contact-us-confirmation.component';
import { LoginComponent } from './components/login/login.component';
import { SignComponent } from './components/sign/sign.component';

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
    AboutComponent,
    HomeComponent,
    CarouselComponent,
    ContactUsConfirmationComponent,
    LoginComponent,
    SignComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers:[],

  

  bootstrap: [AppComponent]
})
export class AppModule { }
