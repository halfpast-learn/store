import { Injectable } from '@angular/core';
import { Item } from '../entities/item';
import { Order } from '../entities/order';
import { ApiService } from './api.api-service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  currentItems: Item[] = [];
  constructor(private authService: AuthService, private apiservice: ApiService) {}
  addItem(item: Item): void {
    this.currentItems.push(item);
  }
  createOrder(address: string = "", contact_info: string = ""): void {
    let order: Order = new Order;
    order.status = "created";
    order.user_owner = this.authService.getCurrentUser().user_id!;
    order.items = this.currentItems;
    order.address = address;
    order.contact_information = contact_info;
    
    this.apiservice.createOrder(order);
    alert("order created!");
  }
  getItems(): Item[] {
    return this.currentItems;
  }
}
