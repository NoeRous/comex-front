import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConsultaPaso2Component } from './page-consulta-paso2.component';

describe('PageConsultaPaso2Component', () => {
  let component: PageConsultaPaso2Component;
  let fixture: ComponentFixture<PageConsultaPaso2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageConsultaPaso2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageConsultaPaso2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
