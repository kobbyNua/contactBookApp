import { TestBed } from '@angular/core/testing';

import { AppicallsService } from './appicalls.service';

describe('AppicallsService', () => {
  let service: AppicallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppicallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
