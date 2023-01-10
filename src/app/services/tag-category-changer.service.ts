import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.api-service';

@Injectable({
  providedIn: 'root',
})
export class TagLoaderService {
  constructor(private apiservice: ApiService) {}

  public tagCategory: BehaviorSubject<string> = new BehaviorSubject<string>("Recommended");

  changeTags(tags: string) {
    this.tagCategory.next(tags);
  }
}
