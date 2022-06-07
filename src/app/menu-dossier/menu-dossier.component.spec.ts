import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDossierComponent } from './menu-dossier.component';

describe('MenuDossierComponent', () => {
  let component: MenuDossierComponent;
  let fixture: ComponentFixture<MenuDossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDossierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
