import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentPageComponent } from './components/payment/payment-page.component';
import { SummaryPageComponent } from './components/summary/summary-page.component';

const routes: Routes = [
{path: 'payment', component: PaymentPageComponent},
{path: 'summary', component:SummaryPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
