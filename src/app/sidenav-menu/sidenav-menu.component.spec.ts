import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavMenuComponent } from './sidenav-menu.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

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
      return { fixture, component };
    }

    it('should create', async(() => {
      const { component } = setup();
      expect(component).toBeTruthy();
    }));

    it('should set showFiller to true', async(() => {
      const { component, fixture } = setup();
      fixture.detectChanges();
      const el  = fixture.debugElement.query(By.css('button')).nativeElement;
      expect(!component.showFiller).toBeTruthy();
      el.click();
      expect(component.showFiller).toBeTruthy();
    }));

    it('should open sidenav', async(() => {
      // const { component, fixture } = setup();

      // const el  = fixture.debugElement.query(By.css('mat-drawer-open'));
      // const openButton  = fixture.debugElement.query(By.css('mat-button-toggle')).nativeElement;
      // openButton.click();
      // const el  = fixture.debugElement.query(By.css('mat-drawer-open'));
      // expect(el.nativeElement).toBeTruthy();
    }));

  });
});
