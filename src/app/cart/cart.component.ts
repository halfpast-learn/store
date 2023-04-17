import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Item } from '../entities/item';
import { CartService } from '../services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @ViewChild(MatTable) table?: MatTable<any>;
  displayedColumns: string[] = ['description', 'price'];
  items: Item[] = [];
  
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.table?.renderRows();
  }

  /*increaseAmount(event: Item) {
    items.filter(x => x.id == event.id)[0].amount += 1;
  }

  decreaseAmount(event: Item) {
    items.filter(x => x.id == event.id)[0].amount -= 1;
    if (items.filter(x => x.id == event.id)[0].amount == 0) {
      items = items.filter(x => x.id != event.id);
      this.dataSource = [...items];
    }
  }*/

  checkoutOrder(address: string, contactInfo: string) {
    this.cartService.createOrder(address, contactInfo);
  }
}
