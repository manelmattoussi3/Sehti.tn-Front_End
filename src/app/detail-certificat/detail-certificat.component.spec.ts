import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCertificatComponent } from './detail-certificat.component';

describe('DetailCertificatComponent', () => {
  let component: DetailCertificatComponent;
  let fixture: ComponentFixture<DetailCertificatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCertificatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCertificatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
