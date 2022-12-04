import { Component, OnInit } from '@angular/core';

import { TagLoaderService } from '../tag-loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(document:click)': 'hideMenu($event)',
  },
})
export class HeaderComponent implements OnInit {
  constructor(private tagloader: TagLoaderService) {}
  visible: boolean = false;
  ngOnInit(): void {}

  changeMenuVisibility() {
    this.visible = !this.visible;
  }

  hideMenu(event: any) {
    if (!event.target.classList.contains('menuicon')) {
      this.visible = false;
    }
  }

  changeTags(event: Event) {
    this.tagloader.changeTags((event.target as HTMLElement).innerText);
  }
}
