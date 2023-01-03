import { Component, OnInit } from '@angular/core';
import { Tag } from '../entities/tag';
import { ApiService } from '../services/api.api-service';
import { TagLoaderService } from '../services/tag-category-changer.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor(
    private tagloader: TagLoaderService,
    private apiservice: ApiService
  ) {}

  tagCategory: string = '';
  ngOnInit(): void {
    this.tagloader.tagCategory.subscribe(
      (result) => (this.tagCategory = result)
    );
    this.apiservice.readTags().subscribe((result) => (this.tags = result));
  }

  tags: Tag[] = [];

  handleSelection(tag: Tag) {
    this.tags.filter((x) => x.tag_id == tag.tag_id)[0].selected =
      !this.tags.filter((x) => x.tag_id == tag.tag_id)[0].selected;
  }
}
