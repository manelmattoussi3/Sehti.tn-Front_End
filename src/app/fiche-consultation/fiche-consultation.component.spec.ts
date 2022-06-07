import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheConsultationComponent } from './fiche-consultation.component';

describe('FicheConsultationComponent', () => {
  let component: FicheConsultationComponent;
  let fixture: ComponentFixture<FicheConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
