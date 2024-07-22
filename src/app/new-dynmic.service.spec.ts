import { TestBed } from '@angular/core/testing';

import { NewDynmicService } from './new-dynmic.service';

describe('NewDynmicService', () => {
  let service: NewDynmicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewDynmicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
