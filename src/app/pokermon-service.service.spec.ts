import { TestBed, inject } from '@angular/core/testing';

import { PokermonServiceService } from './pokermon-service.service';

describe('PokermonServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokermonServiceService]
    });
  });

  it('should be created', inject([PokermonServiceService], (service: PokermonServiceService) => {
    expect(service).toBeTruthy();
  }));
});
