import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConsultStep3Component } from './page-consult-step3.component';

describe('PageConsultStep3Component', () => {
  let component: PageConsultStep3Component;
  let fixture: ComponentFixture<PageConsultStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageConsultStep3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageConsultStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
