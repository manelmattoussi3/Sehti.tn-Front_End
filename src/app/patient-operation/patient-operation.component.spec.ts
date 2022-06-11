import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientOperationComponent } from './patient-operation.component';

describe('PatientOperationComponent', () => {
  let component: PatientOperationComponent;
  let fixture: ComponentFixture<PatientOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
