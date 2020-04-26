import { Component, OnInit, Input } from '@angular/core';
import { IOrder, IUser } from '../../interfaces/user-interfaces'

@Component({
  selector: 'our-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  @Input() title;
  
  ngOnInit() {
  }

  // isLoaded: boolean = false;

  // orders: IOrder[] = [];

  // getName(): string {
  //   return this.name;
  // }

  

  // getUserOrders() {
  //   this.isLoaded = false;
  //   setTimeout(() => {
  //     this.isLoaded = true;
  //     this.orders = [
  //       {
  //         id: 1,
  //         title: 'Заказ 1',
  //         price: 25
  //       },
  //       {
  //         id: 2,
  //         title: 'Заказ 2',
  //         price: 20
  //       },
  //       {
  //         id: 3,
  //         title: 'Заказ 3',
  //         price: 30
  //       },
  //     ]
  //   }, 2000)
  // }
}