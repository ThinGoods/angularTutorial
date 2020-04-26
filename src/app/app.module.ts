import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { OrderComponent } from './components/order/order.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserInfoComponent,
    UserOrdersComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
