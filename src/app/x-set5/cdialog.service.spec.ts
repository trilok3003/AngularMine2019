import { TestBed } from '@angular/core/testing';

import { CdialogService } from './cdialog.service';

describe('CdialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CdialogService = TestBed.get(CdialogService);
    expect(service).toBeTruthy();
  });
});
