import { Component, OnInit } from '@angular/core';
import { Tag } from '../entities/tag';
import { ApiService } from '../services/api.api-service';
import { AuthService } from '../services/auth.service';
import { ItemService } from '../services/item.service';
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
    private authService: AuthService,
    private itemService: ItemService
  ) {}

  tags: Tag[] = [];

  ngOnInit(): void {
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

  handleSelection(tag: Tag) {
    this.tags.filter((x) => x.tag_id == tag.tag_id)[0].selected =
      !this.tags.filter((x) => x.tag_id == tag.tag_id)[0].selected;
    this.tagloader.changeTags(this.tags.filter((x) => x.selected == true));
  }

  applyFilter(description: string, _minPrice: string, _maxPrice: string) {
    description = description==undefined?'':description;
    let minPrice = isNaN(parseInt(_minPrice))?0:parseInt(_minPrice);
    let maxPrice = isNaN(parseInt(_maxPrice))?Number.MAX_SAFE_INTEGER:parseInt(_maxPrice);
    this.itemService.filterItems(description, minPrice, maxPrice, this.tagloader.currentTags.value);
  }
}
