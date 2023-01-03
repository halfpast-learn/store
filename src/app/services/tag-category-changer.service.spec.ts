import { TestBed } from '@angular/core/testing';

import { TagLoaderService } from './tag-category-changer.service';

describe('TagLoaderService', () => {
  let service: TagLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
