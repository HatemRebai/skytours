import { TestBed } from '@angular/core/testing';

import { DetaillogementService } from './detaillogement.service';

describe('DetaillogementService', () => {
  let service: DetaillogementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetaillogementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
