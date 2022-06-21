import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormanalyseComponent } from './formanalyse.component';

describe('FormanalyseComponent', () => {
  let component: FormanalyseComponent;
  let fixture: ComponentFixture<FormanalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormanalyseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormanalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
