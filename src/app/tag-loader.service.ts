import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tag } from './filter/filter.component';

var mockData: { [key: string]: Tag[] } = {
  'Recommended': [{ id: 1, text: 'test1', selected: false }],
  'Goods By Roles': [{ id: 1, text: 'test2', selected: false }],
  'Goods By Categories': [{ id: 1, text: 'test3', selected: false }],
};

@Injectable({
  providedIn: 'root',
})
export class TagLoaderService {
  constructor() {}

  private defaultTags = new BehaviorSubject(mockData['Recommended']);
  currentTags: Observable<Tag[]> = this.defaultTags.asObservable();

  changeTags(tags: string) {
    this.defaultTags.next(mockData[tags]);
  }
}
