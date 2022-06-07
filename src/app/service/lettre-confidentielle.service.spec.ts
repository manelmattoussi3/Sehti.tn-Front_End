import { TestBed } from '@angular/core/testing';

import { LettreConfidentielleService } from './lettre-confidentielle.service';

describe('LettreConfidentielleService', () => {
  let service: LettreConfidentielleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LettreConfidentielleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
