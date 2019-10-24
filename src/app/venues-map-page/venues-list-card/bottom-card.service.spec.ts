import { TestBed } from '@angular/core/testing';

import { BottomCardService } from './bottom-card.service';

describe('BottomCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BottomCardService = TestBed.get(BottomCardService);
    expect(service).toBeTruthy();
  });
});
