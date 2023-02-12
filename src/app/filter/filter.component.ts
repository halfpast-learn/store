import { Component, OnInit } from '@angular/core';
import { Tag } from '../entities/tag';
import { ApiService } from '../services/api.api-service';
import { AuthService } from '../services/auth.service';
import { TagLoaderService } from '../services/tag-category-changer.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor(
    private tagloader: TagLoaderService,
    private apiservice: ApiService,
    private authService: AuthService
  ) {}

  tagCategory: string = '';
  ngOnInit(): void {
    this.tagloader.tagCategory.subscribe(
      (result) => (this.tagCategory = result)
    );
    if (
      this.authService.currentUser.role == undefined ||
      this.authService.currentUser.role == null
    ) {
      this.apiservice.readTags().subscribe((result) => (this.tags = result));
    } else {  
      this.apiservice
        .readTagsByRole(this.authService.currentUser.role)
        .subscribe((result) => (this.tags = result));
    }
  }

  tags: Tag[] = [];

  handleSelection(tag: Tag) {
    this.tags.filter((x) => x.tag_id == tag.tag_id)[0].selected =
      !this.tags.filter((x) => x.tag_id == tag.tag_id)[0].selected;
  }
}
