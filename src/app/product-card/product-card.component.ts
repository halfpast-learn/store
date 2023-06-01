import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../entities/item';
import { ApiService } from '../services/api.api-service';
import { CartService } from '../services/cart-service.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  constructor(private apiService: ApiService, private cartService: CartService, private authService: AuthService) {}

  state: number = 0;

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
  like(item: Item): void {
    if (this.state!=1) {
      this.state = 1;
      this.apiService.changeTagsRating(item.tags.map(x=>x.tag_id), true, this.authService.currentUser.user_id!);
    }
    else {
      this.state=0;
      this.apiService.changeTagsRating(item.tags.map(x=>x.tag_id), false, this.authService.currentUser.user_id!);
    }
  }
  dislike(item: Item): void {
    if (this.state!=-1) {
      this.state = -1;
      this.apiService.changeTagsRating(item.tags.map(x=>x.tag_id), false, this.authService.currentUser.user_id!);
    }
    else {
      this.state=0;
      this.apiService.changeTagsRating(item.tags.map(x=>x.tag_id), true, this.authService.currentUser.user_id!);
    }
  }
}
