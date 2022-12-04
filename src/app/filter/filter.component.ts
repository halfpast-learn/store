import { Component, OnInit } from '@angular/core';
import { TagLoaderService } from '../tag-loader.service';

export interface Tag {
  id: number;
  text: string;
  selected: boolean;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor(private tagloader: TagLoaderService) {}

  ngOnInit(): void {
    this.tagloader.currentTags.subscribe(tags => this.tags = tags)
  }

  tags: Tag[] = [];

  defaultTags: Tag[] = [
    { id: 1, text: 'test1', selected: false },
    { id: 2, text: 'test2', selected: false },
    { id: 3, text: 'test3', selected: false },
  ];

  tagsByRoles: Tag[] = [{ id: 1, text: 'test4', selected: false }];

  tagsByCategories: Tag[] = [{ id: 1, text: 'test5', selected: false }];

  handleSelection(tag: Tag) {
    this.tags.filter((x) => x.id == tag.id)[0].selected = !this.tags.filter(
      (x) => x.id == tag.id
    )[0].selected;
    console.log(tag);
  }
}
