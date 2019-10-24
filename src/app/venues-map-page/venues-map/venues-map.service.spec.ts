import { TestBed } from '@angular/core/testing';

import { VenuesMapService } from './venues-map.service';

describe('VenuesMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VenuesMapService = TestBed.get(VenuesMapService);
    expect(service).toBeTruthy();
  });
});
