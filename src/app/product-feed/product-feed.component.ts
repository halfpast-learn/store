import { Component, OnInit } from '@angular/core';

import { Item } from '../entities/item';
import { Tag } from '../entities/tag';
import { ApiService } from '../services/api.api-service';
import { ItemService } from '../services/item.service';
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
    private tagService: TagLoaderService,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.itemService.itemsSubject.subscribe((result)=>this.items=result);
  }
  changeItems(currentTags: Tag[]) {
    if (currentTags == null || currentTags.length == 0) {
      this.items = this.allItems;
    } else {
      this.apiService
        .readItemsByTags(currentTags.map((tag) => tag.tag_id))
        .subscribe((result) => {
          let items = result;
          let uniqueItems: Item[] = [];
          items.forEach((item) => {
            if (uniqueItems.findIndex((i) => i.item_id == item.item_id)==-1)
              uniqueItems.push(item);
          });
          if (uniqueItems.length > 0) {
            this.items = uniqueItems.sort((a,b)=>a.item_id-b.item_id);
          }
        });
    }
  }
}
