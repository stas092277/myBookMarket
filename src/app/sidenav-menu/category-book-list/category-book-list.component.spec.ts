import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBookListComponent } from './category-book-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CategoryServiceService } from './categoryService.service';

describe('CategoryBookListComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryBookListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        MatDialogModule
      ],
    })
    .compileComponents();
  }));

  describe(':', () => {

    function setup() {
      const fixture = TestBed.createComponent(CategoryBookListComponent);
      const component = fixture.componentInstance;
      const _categoryService = fixture.debugElement.injector.get(CategoryServiceService);

      return { fixture, component, _categoryService };
    }

    it('should create', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
    });

    it('should call CategoryService', () => {
    const { _categoryService, component } = setup();
    component.ngOnInit();
    expect(spyOn(_categoryService, 'getAll').calls.any()).toBeTruthy();
    });
  });
});
