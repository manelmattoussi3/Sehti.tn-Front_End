import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueRadioComponent } from './historique-radio.component';

describe('HistoriqueRadioComponent', () => {
  let component: HistoriqueRadioComponent;
  let fixture: ComponentFixture<HistoriqueRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
