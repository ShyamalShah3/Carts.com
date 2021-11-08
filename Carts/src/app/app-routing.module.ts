import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { PaymentPageComponent } from './components/payment/payment-page.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SummaryPageComponent } from './components/summary/summary-page.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { SignComponent} from './components/sign/sign.component'
const routes: Routes = [
{path: '',redirectTo:'/home',pathMatch:'full'},
{path: 'shopping-cart', component: ShoppingCartComponent},
{path: 'payment', component: PaymentPageComponent},
{path: 'summary', component:SummaryPageComponent},
{path:'shipping', component:ShippingComponent},
{path:'catalog', component:CatalogComponent},
{path: 'confirmation', component: ConfirmationComponent},
{path: 'about', component: AboutComponent},
{path: 'home', component: HomeComponent},
{path: 'contact-us', component: ContactUsComponent},
{path: 'login', component: LoginComponent},
{path: 'sign', component: SignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
