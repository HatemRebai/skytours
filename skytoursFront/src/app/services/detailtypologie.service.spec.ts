import { TestBed } from '@angular/core/testing';

import { DetailtypologieService } from './detailtypologie.service';

describe('DetailtypologieService', () => {
  let service: DetailtypologieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailtypologieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
