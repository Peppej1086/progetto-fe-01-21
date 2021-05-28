import { TestBed } from '@angular/core/testing';

import { FattureServiceService } from './fatture-service.service';

describe('FattureServiceService', () => {
  let service: FattureServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FattureServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
