import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavMenuComponent } from './sidenav-menu.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CategoryServiceService } from './categoryService.service';

describe('SidenavMenuComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavMenuComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  describe(':', () => {


    function setup() {
      const fixture = TestBed.createComponent(SidenavMenuComponent);
      const component = fixture.debugElement.componentInstance;
      const _categoryService = fixture.debugElement.injector.get(CategoryServiceService);
      fixture.detectChanges();
      return { fixture, component, _categoryService };
    }

    it('should create', async(() => {
      const { component } = setup();
      expect(component).toBeTruthy();
    }));

    it('should set showFiller to true', async(() => {
      const { component, fixture } = setup();

      const el  = fixture.debugElement.query(By.css('button')).nativeElement;
      expect(!component.showFillerBook).toBeTruthy();
      el.click();
      expect(component.showFillerBook).toBeTruthy();
    }));

    it('should call CategoryService', async(() => {
      const { _categoryService, fixture } = setup();
      const categoryServiceSpy =  spyOn(_categoryService, 'getAllBooks').and.callThrough();
      expect( categoryServiceSpy ).not.toHaveBeenCalled();
      const el  = fixture.debugElement.query(By.css('button')).nativeElement;
      el.click();
      expect(categoryServiceSpy).toHaveBeenCalledTimes(1);
    }));


    it('should open sidenav', async(() => {
      const { component, fixture } = setup();

      const openButton  = fixture.debugElement.query(By.css('mat-button-toggle')).nativeElement;
      openButton.click();


      expect(component.sidenav.opened).toBeTruthy();
    }));

  });
});
