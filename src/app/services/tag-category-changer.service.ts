import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tag } from '../entities/tag';

@Injectable({
  providedIn: 'root',
})
export class TagLoaderService {

  public tagCategory: BehaviorSubject<string> = new BehaviorSubject<string>("Recommended");
  public currentTags: BehaviorSubject<Tag[]> = new BehaviorSubject<Tag[]>([]);

  changeTagCategory(tags: string) {
    this.tagCategory.next(tags);
  }
  changeTags(tags: Tag[]) {
    this.currentTags.next(tags);
  }
}
