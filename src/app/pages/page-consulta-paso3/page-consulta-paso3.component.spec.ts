import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConsultaPaso3Component } from './page-consulta-paso3.component';

describe('PageConsultaPaso3Component', () => {
  let component: PageConsultaPaso3Component;
  let fixture: ComponentFixture<PageConsultaPaso3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageConsultaPaso3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageConsultaPaso3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
