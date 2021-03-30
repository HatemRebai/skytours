import { TestBed } from '@angular/core/testing';

import { DetailsupplementService } from './detailsupplement.service';

describe('DetailsupplementService', () => {
  let service: DetailsupplementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsupplementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
