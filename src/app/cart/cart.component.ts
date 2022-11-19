import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  name: string;
  amount: number;
  price: number;
  totalPrice: number;
}

var ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'test1', amount: 1, price: 10, totalPrice: 10 },
  { id: 2, name: 'test1', amount: 1, price: 10, totalPrice: 10 },
  { id: 3, name: 'test1', amount: 1, price: 10, totalPrice: 10 },
  { id: 4, name: 'test1', amount: 1, price: 10, totalPrice: 10 },
];

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = ['name', 'amount', 'price', 'totalPrice'];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {}

  increaseAmount(event: PeriodicElement) {
    ELEMENT_DATA.filter(x => x.id == event.id)[0].amount += 1;
  }

  decreaseAmount(event: PeriodicElement) {
    ELEMENT_DATA.filter(x => x.id == event.id)[0].amount -= 1;
    if (ELEMENT_DATA.filter(x => x.id == event.id)[0].amount == 0) {
      ELEMENT_DATA = ELEMENT_DATA.filter(x => x.id != event.id);
      this.dataSource = [...ELEMENT_DATA];
    }
  }
  checkoutOrder() {
    //create order in DB, alert and redirect
    alert("Order created");
    
  }
}
