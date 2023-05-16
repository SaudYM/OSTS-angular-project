import { TestBed } from '@angular/core/testing';

import { OSTsService } from './osts.service';

describe('OSTsService', () => {
  let service: OSTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OSTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
