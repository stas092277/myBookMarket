import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBookListComponent } from './category-book-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { CategoryServiceService } from './categoryService.service';
import { By } from '@angular/platform-browser';
import { not } from '@angular/compiler/src/output/output_ast';

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
      const dailog = fixture.debugElement.injector.get(MatDialog);
      return { fixture, component, _categoryService, dailog };
    }

    it('should create', async(() => {
      const { component } = setup();
      expect(component).toBeTruthy();
    }));

    it('should call CategoryService', async(() => {
      const { _categoryService, component } = setup();
      const categoryServiceSpy =  spyOn(_categoryService, 'getAll').and.callThrough();
      expect( categoryServiceSpy ).not.toHaveBeenCalled();
      component.ngOnInit();
      expect(categoryServiceSpy).toHaveBeenCalledTimes(1);
    }));

    it('should call the onSelect', async(() => {
      const { component, fixture } = setup();
      fixture.detectChanges();
      spyOn(component, 'onSelect');
      expect(component.onSelect).not.toHaveBeenCalled();
      const el  = fixture.debugElement.query(By.css('div')).nativeElement;
      el.click();
      expect(component.onSelect).toHaveBeenCalled();
    }));

    it('should call dialog ', async(() => {
      // const { component, fixture, dailog } = setup();
      // const dailogSpy =  spyOn( dailog, 'open').and.callThrough();
      // expect( dailogSpy ).not.toHaveBeenCalled();
      // const el  = fixture.debugElement.query(By.css('div')).nativeElement;
      // el.click();
      // expect(dailogSpy).toHaveBeenCalledTimes(1);
    }));




  });
});
