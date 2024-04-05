import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConsultStep1Component } from './page-consult-step1.component';

describe('PageConsultStep1Component', () => {
  let component: PageConsultStep1Component;
  let fixture: ComponentFixture<PageConsultStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageConsultStep1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageConsultStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
