import { TestBed } from '@angular/core/testing';

import { ConsultaPaso3Service } from './consulta-paso3.service';

describe('ConsultaPaso3Service', () => {
  let service: ConsultaPaso3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaPaso3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
