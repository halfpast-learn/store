import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tag } from '../entities/tag';
import { ApiService } from './api.api-service';

@Injectable({
  providedIn: 'root',
})
export class TagLoaderService {
  constructor(private apiservice: ApiService) {}

  public tagCategory: BehaviorSubject<string> = new BehaviorSubject<string>("Recommended");
  public currentTags: BehaviorSubject<Tag[]> = new BehaviorSubject<Tag[]>([]);

  changeTagCategory(tags: string) {
    this.tagCategory.next(tags);
  }
  changeTags(tags: Tag[]) {
    this.currentTags.next(tags);
  }
}
