import { TestBed } from '@angular/core/testing';

import { DistanceService } from './distance-serv.service';

describe('DistanceServService', () => {
  let service: DistanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
