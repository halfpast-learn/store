import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tag } from '../entities/tag';
import { ApiService } from './api.api-service';

@Injectable({
  providedIn: 'root',
})
export class TagLoaderService {
  constructor(private apiservice: ApiService) {}

  private defaultTags: BehaviorSubject<Tag[]> = new BehaviorSubject<Tag[]>([]);// = new BehaviorSubject(this.apiservice.readTags());
  ngOnInit() {
    this.apiservice.readTags().subscribe(result => this.defaultTags.next(result));
  }
  currentTags: Observable<Tag[]> = this.defaultTags.asObservable();

  changeTags(tags: string) {
    this.apiservice.readTags().subscribe(result => this.defaultTags.next(result));
  }
}
