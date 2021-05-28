import { TestBed } from '@angular/core/testing';

import { ClientiServiceService } from './clienti-service.service';

describe('ClientiServiceService', () => {
  let service: ClientiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
