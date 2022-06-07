import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcueilDossierComponent } from './acueil-dossier.component';

describe('AcueilDossierComponent', () => {
  let component: AcueilDossierComponent;
  let fixture: ComponentFixture<AcueilDossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcueilDossierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcueilDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
