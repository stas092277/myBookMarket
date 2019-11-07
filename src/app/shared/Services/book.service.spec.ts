import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';

describe('BookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookService = TestBed.get(BookService);
    expect(service).toBeTruthy();
  });

  it('should return 5 types of book', () => {
    const service: BookService = TestBed.get(BookService);
    expect(service.getCategs().length).toBe(5);
  });
});
