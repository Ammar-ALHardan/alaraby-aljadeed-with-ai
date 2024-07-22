import { TestBed } from '@angular/core/testing';

import { HompepageService } from './hompepage.service';

describe('HompepageService', () => {
  let service: HompepageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HompepageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
