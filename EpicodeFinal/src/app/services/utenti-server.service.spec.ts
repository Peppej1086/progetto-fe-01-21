import { TestBed } from '@angular/core/testing';

import { UtentiServerService } from './utenti-server.service';

describe('UtentiServerService', () => {
  let service: UtentiServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtentiServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
