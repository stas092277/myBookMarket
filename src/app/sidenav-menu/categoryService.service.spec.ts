import { TestBed } from '@angular/core/testing';

import { CategoryServiceService } from './categoryService.service';

describe('CategoryServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryServiceService = TestBed.get(CategoryServiceService);
    expect(service).toBeTruthy();
  });

  it('should return 5 types of book', () => {
    const service: CategoryServiceService = TestBed.get(CategoryServiceService);
    expect(service.getAll().length).toBe(5);
  });
});
