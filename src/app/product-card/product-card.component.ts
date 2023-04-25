import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../entities/item';
import { ApiService } from '../services/api.api-service';
import { CartService } from '../services/cart-service.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  constructor(private apiService: ApiService, private cartService: CartService) {}
  @Input() item: Item = {
    item_id: -1,
    price: 0,
    description: 'empty',
    tags: [],
  };
  imageSource = '';
  ngOnInit(): void {
    this.imageSource = this.apiService.API_SERVER+`/images/${this.item.item_id}`;
  }
  addToCart(item: Item): void {
    this.cartService.addItem(item);
  }
}
