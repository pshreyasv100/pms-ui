import { TestBed } from '@angular/core/testing';

import { PmsSuggestorService } from './pms-suggestor.service';

describe('PmsSuggestorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PmsSuggestorService = TestBed.get(PmsSuggestorService);
    expect(service).toBeTruthy();
  });
});
