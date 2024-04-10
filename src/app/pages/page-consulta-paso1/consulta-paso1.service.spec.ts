import { TestBed } from '@angular/core/testing';

import { ConsultaPaso1Service } from './consulta-paso1.service';

describe('ConsultaPaso1Service', () => {
  let service: ConsultaPaso1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaPaso1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
