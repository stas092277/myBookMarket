import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';

describe('GameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameService = TestBed.get(GameService);
    expect(service).toBeTruthy();
  });

  it('should return 5 types of book', () => {
    const service: GameService = TestBed.get(GameService);
    expect(service.getCategs().length).toBe(5);
  });
});
