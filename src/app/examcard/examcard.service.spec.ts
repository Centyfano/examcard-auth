import { TestBed } from '@angular/core/testing';

import { ExamcardService } from './examcard.service';

describe('ExamcardService', () => {
  let service: ExamcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
