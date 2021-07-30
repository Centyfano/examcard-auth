import { TestBed } from '@angular/core/testing';

import { QrResultService } from './qr-result.service';

describe('QrResultService', () => {
  let service: QrResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
