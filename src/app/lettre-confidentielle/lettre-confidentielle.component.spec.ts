import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettreConfidentielleComponent } from './lettre-confidentielle.component';

describe('LettreConfidentielleComponent', () => {
  let component: LettreConfidentielleComponent;
  let fixture: ComponentFixture<LettreConfidentielleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LettreConfidentielleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LettreConfidentielleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
