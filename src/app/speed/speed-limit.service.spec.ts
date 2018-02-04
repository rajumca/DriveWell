import { TestBed, inject } from '@angular/core/testing';

import { SpeedLimitSeviceService } from './speed-limit-sevice.service';

describe('SpeedLimitSeviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeedLimitSeviceService]
    });
  });

  it('should be created', inject([SpeedLimitSeviceService], (service: SpeedLimitSeviceService) => {
    expect(service).toBeTruthy();
  }));
});
