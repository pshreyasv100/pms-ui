import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { HttpClientModule } from   '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SalesDeptPageComponent } from './sales-dept-page/sales-dept-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { CustomerLoginRegisterComponent } from './customer-login-register/customer-login-register.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatWindowComponent,
    RegisterComponent,
    HomePageComponent,
    SalesDeptPageComponent,
    WelcomeComponent,
    OrderHistoryComponent,
    CustomerLoginRegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
