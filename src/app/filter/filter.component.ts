import { Component, OnInit } from '@angular/core';
import { Tag } from '../entities/tag';
import { TagLoaderService } from '../services/tag-loader.service';

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

  handleSelection(tag: Tag) {
    this.tags.filter((x) => x.tag_id == tag.tag_id)[0].selected = !this.tags.filter(
      (x) => x.tag_id == tag.tag_id
    )[0].selected;
  }
}
