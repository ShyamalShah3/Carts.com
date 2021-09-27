import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { PaymentPageComponent } from './components/payment/payment-page.component';
import { SummaryPageComponent } from './components/summary/summary-page.component';


const routes: Routes = [
{path: '',redirectTo:'/catalog',pathMatch:'full'},
{path: 'payment', component: PaymentPageComponent},
{path: 'summary', component:SummaryPageComponent},
{path:'catalog', component:CatalogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
