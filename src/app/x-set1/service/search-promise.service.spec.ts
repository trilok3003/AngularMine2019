import { TestBed } from '@angular/core/testing';

import { SearchPromiseService } from './search-promise.service';

describe('SearchPromiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchPromiseService = TestBed.get(SearchPromiseService);
    expect(service).toBeTruthy();
  });
});
