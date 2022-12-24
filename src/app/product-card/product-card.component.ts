import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../entities/item';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  constructor() {}
  @Input() itemData: Item = {
    item_id: -1,
    price: 0,
    description: 'empty',
  };
  ngOnInit(): void {}
}
