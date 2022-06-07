import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaiDossierFicheComponent } from './detai-dossier-fiche.component';

describe('DetaiDossierFicheComponent', () => {
  let component: DetaiDossierFicheComponent;
  let fixture: ComponentFixture<DetaiDossierFicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaiDossierFicheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaiDossierFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
