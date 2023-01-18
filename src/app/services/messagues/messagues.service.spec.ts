import { TestBed } from '@angular/core/testing';

import { MessaguesService } from './messagues.service';

describe('MessaguesService', () => {
  let service: MessaguesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessaguesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
