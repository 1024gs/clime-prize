import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PrizesService } from './prizes.service';

describe('PrizesService', () => {
  let service: PrizesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PrizesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getOne method', () => {
    expect(service.getOne).toBeTruthy();
  });
});
