import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { SalesDeptPageComponent } from './sales-dept-page/sales-dept-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { CustomerLoginRegisterComponent } from './customer-login-register/customer-login-register.component';

const routes: Routes = [
 
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'customer',
    component: CustomerLoginRegisterComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path:'welcome/chat',
    component: ChatWindowComponent
  },
  {
    path:'welcome/history',
    component: OrderHistoryComponent
  },
  {
    path:'sales',
    component: SalesDeptPageComponent
  },
  {
    path: 'customer/register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
