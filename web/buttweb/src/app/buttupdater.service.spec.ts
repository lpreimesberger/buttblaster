import { TestBed } from '@angular/core/testing';

import { ButtupdaterService } from './buttupdater.service';

describe('ButtupdaterService', () => {
  let service: ButtupdaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtupdaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
