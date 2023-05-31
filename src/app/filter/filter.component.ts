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
  ) { }

  description: string = '';
  minPrice: string = '';
  maxPrice: string = '';
  tags: Tag[] = [];
  selected: { [id: number]: boolean } = {};

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
    this.selected[tag.tag_id]=!this.selected[tag.tag_id];
    this.tagloader.changeTags(this.tags.filter((x=>this.selected[x.tag_id]==true)));
  }

  applyFilter() {
    console.log(
      this.description == '' ? true : this.description,
      Number(this.minPrice),
      Number(this.maxPrice) == 0 ? Infinity : Number(this.maxPrice),
      this.tagloader.currentTags.value
    );
    this.itemService.filterItems(this.description, Number(this.minPrice), Number(this.maxPrice), this.tagloader.currentTags.value);
  }
}
