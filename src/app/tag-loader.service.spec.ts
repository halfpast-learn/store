import { TestBed } from '@angular/core/testing';

import { TagLoaderService } from './tag-loader.service';

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
