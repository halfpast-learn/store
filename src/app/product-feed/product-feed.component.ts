import { Component, OnInit } from '@angular/core';

import { Item } from '../entities/item';
import { Tag } from '../entities/tag';
import { ApiService } from '../services/api.api-service';
import { TagLoaderService } from '../services/tag-category-changer.service';

@Component({
  selector: 'app-product-feed',
  templateUrl: './product-feed.component.html',
  styleUrls: ['./product-feed.component.scss'],
})
export class ProductFeedComponent implements OnInit {
  items: Item[] = [];
  allItems: Item[] = [];
  currentTags: Tag[] = [];
  constructor(
    private apiService: ApiService,
    private tagService: TagLoaderService
  ) {}

  ngOnInit(): void {
    this.apiService.readItems().subscribe((result) => {
      this.allItems = result;
      console.log(this.allItems); 
    });

    this.tagService.currentTags.subscribe((result) => {
      if (result.length != 0) {
        this.apiService
          .readItemsByTags(result.map((a) => a.tag_id))
          .subscribe((result) => {
            this.items = result;
            console.log(this.items);
          });
      } else {
        this.items = this.allItems;
      }
    });
  }
}
