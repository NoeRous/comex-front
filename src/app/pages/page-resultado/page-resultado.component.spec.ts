import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageResultadoComponent } from './page-resultado.component';

describe('PageResultadoComponent', () => {
  let component: PageResultadoComponent;
  let fixture: ComponentFixture<PageResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageResultadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
