import { TestBed } from '@angular/core/testing';

import { SearchdoctorService } from './searchdoctor.service';

describe('SearchdoctorService', () => {
  let service: SearchdoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchdoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
