import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOrdonanceComponent } from './detail-ordonance.component';

describe('DetailOrdonanceComponent', () => {
  let component: DetailOrdonanceComponent;
  let fixture: ComponentFixture<DetailOrdonanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailOrdonanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOrdonanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
