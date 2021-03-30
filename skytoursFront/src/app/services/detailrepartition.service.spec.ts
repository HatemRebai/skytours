import { TestBed } from '@angular/core/testing';

import { DetailrepartitionService } from './detailrepartition.service';

describe('DetailrepartitionService', () => {
  let service: DetailrepartitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailrepartitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
