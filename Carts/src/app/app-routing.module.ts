import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { PaymentPageComponent } from './components/payment/payment-page.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SummaryPageComponent } from './components/summary/summary-page.component';


const routes: Routes = [
{path: '',redirectTo:'/catalog',pathMatch:'full'},
{path: 'shopping-cart', component: ShoppingCartComponent},
{path: 'payment', component: PaymentPageComponent},
{path: 'summary', component:SummaryPageComponent},
{path:'shipping', component:ShippingComponent},
{path:'catalog', component:CatalogComponent},
{path: 'confirmation', component: ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
