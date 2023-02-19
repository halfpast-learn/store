import { Injectable } from '@angular/core';
import { Item } from '../entities/item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  currentItems: Item[] = [];
  constructor() {}
  addItem(item: Item): void {
    this.currentItems.push(item);
  }
  getItems(): Item[] {
    return this.currentItems;
  }
}
