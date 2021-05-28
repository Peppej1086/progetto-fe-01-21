import { TestBed } from '@angular/core/testing';

import { MyServiceTokenService } from './my-service-token.service';

describe('MyServiceTokenService', () => {
  let service: MyServiceTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyServiceTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
