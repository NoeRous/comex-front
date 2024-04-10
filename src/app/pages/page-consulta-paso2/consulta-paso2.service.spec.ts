import { TestBed } from '@angular/core/testing';

import { ConsultaPaso2Service } from './consulta-paso2.service';

describe('ConsultaPaso2Service', () => {
  let service: ConsultaPaso2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaPaso2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
