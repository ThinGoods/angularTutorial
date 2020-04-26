import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor() { }

  @Input() orderInfo;
  isInverted: boolean = false;

  ngOnInit(): void {

  }

  changeColor() {
    this.isInverted = !this.isInverted;
    console.log('Клик по заказу номер', this.orderInfo.id)
  }

}
