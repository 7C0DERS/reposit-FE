import { TestBed } from '@angular/core/testing';

import { RepositServiceService } from './reposit-service.service';

describe('RepositServiceService', () => {
  let service: RepositServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
