import { TestBed } from '@angular/core/testing';

import { FicheConsultationService } from './fiche-consultation.service';

describe('FicheConsultationService', () => {
  let service: FicheConsultationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FicheConsultationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
