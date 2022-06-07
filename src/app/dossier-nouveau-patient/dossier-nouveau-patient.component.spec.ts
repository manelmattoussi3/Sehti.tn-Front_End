import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierNouveauPatientComponent } from './dossier-nouveau-patient.component';

describe('DossierNouveauPatientComponent', () => {
  let component: DossierNouveauPatientComponent;
  let fixture: ComponentFixture<DossierNouveauPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossierNouveauPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DossierNouveauPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
