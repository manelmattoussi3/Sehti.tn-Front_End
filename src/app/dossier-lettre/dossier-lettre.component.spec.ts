import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierLettreComponent } from './dossier-lettre.component';

describe('DossierLettreComponent', () => {
  let component: DossierLettreComponent;
  let fixture: ComponentFixture<DossierLettreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossierLettreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DossierLettreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
