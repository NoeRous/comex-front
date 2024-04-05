import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConsultStep2Component } from './page-consult-step2.component';

describe('PageConsultStep2Component', () => {
  let component: PageConsultStep2Component;
  let fixture: ComponentFixture<PageConsultStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageConsultStep2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageConsultStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
