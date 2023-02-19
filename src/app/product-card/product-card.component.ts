import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../entities/item';
import { CartService } from '../services/cart-service.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  constructor(private cartService: CartService) {}
  @Input() item: Item = {
    item_id: -1,
    price: 0,
    description: 'empty',
  };
  ngOnInit(): void {}
  addToCart(item: Item): void {
    this.cartService.addItem(item);
  }
}
