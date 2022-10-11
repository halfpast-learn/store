import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product-feed/product-feed.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  constructor() {}
  @Input() productData: Product = {
    id: -1,
    name: 'empty',
    description: 'empty',
  };
  ngOnInit(): void {}
}
