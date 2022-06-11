import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinFamilleComponent } from './medecin-famille.component';

describe('MedecinFamilleComponent', () => {
  let component: MedecinFamilleComponent;
  let fixture: ComponentFixture<MedecinFamilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedecinFamilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
