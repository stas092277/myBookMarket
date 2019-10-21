import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavMenuComponent } from './sidenav-menu.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BookService } from '../Services/book.service';
import { MatSidenav } from '@angular/material/sidenav';

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
      const _bookService = fixture.debugElement.injector.get(BookService);
      return { fixture, component, _bookService };
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

  });
});
