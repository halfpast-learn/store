import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Item } from '../entities/item';
import { Tag } from '../entities/tag';
import { ApiService } from './api.api-service';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  itemsSubject: Subject<Item[]> = new Subject<Item[]>();
  items: Item[] = [];
  allItems: Item[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.readItems().subscribe((result) => {
        this.allItems = result;
        this.items = this.allItems;
        this.itemsSubject.next(this.items);
      });
  }

  addItem(item: Item) {
    this.items.push(item);
    this.itemsSubject.next(this.items);
  }

  removeItem(item: Item) {
    let removeIndex = this.items.findIndex((i) => i.item_id == item.item_id);
    this.items = this.items.filter((item, index) => index != removeIndex);
    this.itemsSubject.next(this.items);
  }

  filterItems(
    description: string,
    minPrice: number,
    maxPrice: number,
    tags: Tag[]
  ) {
    this.items = this.allItems.filter((item) => {
      //check if item contains a tag
      let containsTag = true;
      for (let tag of tags) {
        containsTag =
          item.tags.findIndex((itemTag) => itemTag.tag_id == tag.tag_id) != -1;
        if (containsTag) {
          break;
        }
      }
      return (
        item.description.includes(description) &&
        item.price > minPrice &&
        item.price < maxPrice &&
        containsTag
      );
    });
    this.itemsSubject.next(this.items);
  }
}
