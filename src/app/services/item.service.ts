import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Item } from '../entities/item';
import { Tag } from '../entities/tag';
import { ApiService } from './api.api-service';
import { TagService } from './tag.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  itemsSubject: Subject<Item[]> = new Subject<Item[]>();
  items: Item[] = [];
  allItems: Item[] = [];

  tagOpinions: {tag_id:number, name:string, opinion:number}[] = [];

  constructor(private apiService: ApiService, private tagService: TagService) {
    this.apiService.readItems().subscribe((result) => {
        this.allItems = result;
        this.items = this.allItems;
        this.itemsSubject.next(this.items);
      });
    this.apiService.getTagOpinions().subscribe(result=>{this.tagOpinions=result; this.updateItemsOrder()});
  }
  updateItemsOrder() {
    this.items.sort((b,a)=>{
      let asorted = this.tagOpinions.findIndex(x=>x.tag_id == a.tags.sort((tag_a,tag_b)=>this.tagOpinions[tag_b.tag_id].opinion-this.tagOpinions[tag_a.tag_id].opinion)[0].tag_id);
      let bsorted = this.tagOpinions.findIndex(x=>x.tag_id == b.tags.sort((tag_a,tag_b)=>this.tagOpinions[tag_b.tag_id].opinion-this.tagOpinions[tag_a.tag_id].opinion)[0].tag_id);
      return bsorted-asorted;
    });
    console.log(this.items);
    this.allItems=this.items;
  }
  findMostValuableTag(item: Item) {
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
        item.description.toLowerCase().includes(description.toLowerCase()) &&
        item.price >= minPrice &&
        (maxPrice==0?true:(item.price < maxPrice)) &&
        containsTag
      );
    });
    this.itemsSubject.next(this.items);
  }
}
