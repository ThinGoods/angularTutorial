import { Component, OnInit, Input } from '@angular/core';
import { IOrder } from 'src/app/interfaces/user-interfaces';

@Component({
  selector: 'user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent implements OnInit {

  constructor() { }

  @Input() username;

  ngOnInit(): void {
    this.getUserOrders(this.username);
  }
  
  orders: IOrder[] = [];
  isLoaded: boolean = false;
  
  getUserOrders(username) {
    this.isLoaded = false;
    setTimeout(() => {
      this.isLoaded = true;
      this.orders = [
        {
          id: 1,
          title: 'Заказ пользователя '+ username +' - 1',
          price: 25,
          url: '../../assets/avatar.png',
          currency: 'UAH'
        },
        {
          id: 2,
          title: 'Заказ пользователя '+ username +' - 2',
          price: 20,
          url: '../../assets/avatar.png',
          currency: 'UAH'
        },
        {
          id: 3,
          title: 'Заказ пользователя '+ username +' - 3',
          price: 30,
          url: '../../assets/avatar.png',
          currency: 'UAH'
        },
      ]
    }, 1000)
  }

}
