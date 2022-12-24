import { Component, OnInit } from '@angular/core';

import { Item } from '../entities/item';
import { ApiService } from '../services/api.api-service';

@Component({
  selector: 'app-product-feed',
  templateUrl: './product-feed.component.html',
  styleUrls: ['./product-feed.component.scss'],
})
export class ProductFeedComponent implements OnInit {
  items: Item[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.readItems().subscribe((result) => {
      this.items = result;
    });
  }
}
