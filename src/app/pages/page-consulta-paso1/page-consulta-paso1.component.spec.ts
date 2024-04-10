import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConsultaPaso1Component } from './page-consulta-paso1.component';

describe('PageConsultaPaso1Component', () => {
  let component: PageConsultaPaso1Component;
  let fixture: ComponentFixture<PageConsultaPaso1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageConsultaPaso1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageConsultaPaso1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
