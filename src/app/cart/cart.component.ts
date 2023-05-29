import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { CartService, CartWrapper } from '../services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @ViewChild(MatTable) table?: MatTable<any>;
  displayedColumns: string[] = ['description', 'price', 'amount', 'totalPrice'];
  items: CartWrapper[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    console.log(this.items);
    this.table?.renderRows();
  }

  increaseAmount(event: CartWrapper) {
    this.cartService.addItem(event.item);
    console.log(this.items);
  }

  decreaseAmount(event: CartWrapper) {
    this.cartService.removeItem(event.item);
    this.items=this.cartService.getItems();
  }

  checkoutOrder(address: string, contactInfo: string) {
    this.cartService.createOrder(address, contactInfo);
  }
}
