import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysePatientComponent } from './analyse-patient.component';

describe('AnalysePatientComponent', () => {
  let component: AnalysePatientComponent;
  let fixture: ComponentFixture<AnalysePatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysePatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
