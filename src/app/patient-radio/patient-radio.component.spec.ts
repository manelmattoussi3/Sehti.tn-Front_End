import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRadioComponent } from './patient-radio.component';

describe('PatientRadioComponent', () => {
  let component: PatientRadioComponent;
  let fixture: ComponentFixture<PatientRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
