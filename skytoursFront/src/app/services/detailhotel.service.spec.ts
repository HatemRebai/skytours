import { TestBed } from '@angular/core/testing';

import { DetailhotelService } from './detailhotel.service';

describe('DetailhotelService', () => {
  let service: DetailhotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailhotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
