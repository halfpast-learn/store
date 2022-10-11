import { Component, OnInit } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  description: string;
  price?: number;
  pictureId?: number;
}

@Component({
  selector: 'app-product-feed',
  templateUrl: './product-feed.component.html',
  styleUrls: ['./product-feed.component.scss'],
})
export class ProductFeedComponent implements OnInit {
  products: Product[] = [
    { id: 1, name: 'Monitor', description: 'Cheap IPS monitor', price: 100 },
    {
      id: 2,
      name: 'Headset',
      description: 'Headset with microphone',
      price: 50,
    },
    { id: 3, name: 'Mouse', description: 'Wireless mouse', price: 30 },
    {
      id: 4,
      name: 'Bluetooth adapter',
      description: 'Adapter BT 5.0',
      price: 10,
    },
    {
      id: 5,
      name: 'USB Type-C cord',
      description: 'USB 2.0 Type-C cord for device charging and file transfer',
      price: 5,
    },
    {
      id: 6,
      name: 'Napkin',
      description: 'Fiberglass napkin for glasses',
      price: 1,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
