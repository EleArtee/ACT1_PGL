import { TestBed } from '@angular/core/testing';

import { TtgameService } from './ttgame.service';

describe('TtgameService', () => {
  let service: TtgameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TtgameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
