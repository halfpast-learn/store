import { Injectable } from '@angular/core';
import { Tag } from '../entities/tag';
import { ApiService } from './api.api-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TagService {
    tags: Tag[] = [];
    currentTags: BehaviorSubject<Tag[]> = new BehaviorSubject<Tag[]>([]);
    opinion: { [tag_id: number]: number } = {};
    selected: { [tag_id: number]: number } = {};

    constructor(private apiservice: ApiService) {
        this.updateTags();
    }

    updateTags() {
        this.apiservice
            .getTagOpinions()
            .subscribe((result) => {
                this.tags = result.map(x => {
                    let t: Tag = new Tag();
                    t.name = x.name;
                    t.tag_id = x.tag_id;
                    t.selected = false;
                    this.opinion[t.tag_id] = x.opinion;
                    return t;
                }
                );
                this.currentTags.next(this.tags);
        
            }
            );
    }
}


