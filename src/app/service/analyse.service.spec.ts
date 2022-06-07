import { TestBed } from '@angular/core/testing';

import { AnayseService } from './analyse.service';

describe('AnayseService', () => {
  let service: AnayseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnayseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
