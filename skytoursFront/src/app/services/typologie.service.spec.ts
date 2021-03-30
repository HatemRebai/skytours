import { TestBed } from '@angular/core/testing';

import { TypologieService } from './typologie.service';

describe('TypologieService', () => {
  let service: TypologieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypologieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
