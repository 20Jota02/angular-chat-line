import { TestBed } from '@angular/core/testing';

import { SockectService } from './sockect.service';

describe('SockectService', () => {
  let service: SockectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SockectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
