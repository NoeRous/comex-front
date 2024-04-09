import { TestBed } from '@angular/core/testing';

import { ConsultStep1Service } from './consult-step1.service';

describe('ConsultStep1Service', () => {
  let service: ConsultStep1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultStep1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
