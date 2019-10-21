import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoresListComponent } from './categores-list.component';
import { By } from '@angular/platform-browser';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BaseService } from 'src/app/Abstractions/base.service';
import { BookService } from 'src/app/Services/book.service';

describe('CategoresListComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoresListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        MatDialogModule,
        BrowserAnimationsModule
      ],
      providers:[CategoresListComponent,
        { provide: BaseService, useClass: BookService }
      ]
    })
    .compileComponents();
  }));

  describe(':', () => {

    function setup() {
      const fixture = TestBed.createComponent(CategoresListComponent);
      const component = fixture.componentInstance;
      const dailog = fixture.debugElement.injector.get(MatDialog);
      const _baseService = fixture.debugElement.injector.get(BaseService);
      return { fixture, component,  dailog, _baseService};
    }

    it('should create', async(() => {
      const { component } = setup();
      expect(component).toBeTruthy();
    }));

    it('should call the onSelect', async(() => {
      const { component, fixture } = setup();

      component.ngOnInit();

      fixture.detectChanges();
      spyOn(component, 'onSelect');
      expect(component.onSelect).not.toHaveBeenCalled();
      const el  = fixture.debugElement.query(By.css('div')).nativeElement;
      el.click();
      expect(component.onSelect).toHaveBeenCalled();
    }));

    it('should call dialog ', async(() => {
      const { fixture, dailog, component } = setup();

      component.ngOnInit();
      fixture.detectChanges();
      const dailogSpy =  spyOn( dailog, 'open').and.callThrough();
      expect( dailogSpy ).not.toHaveBeenCalled();
      const el  = fixture.debugElement.query(By.css('div')).nativeElement;
      el.click();
      expect( dailogSpy ).toHaveBeenCalledTimes(1);
    }));

    it('should call BaseService', async(() => {
      const { component, _baseService, fixture } = setup();
      const baseServiceSpy =  spyOn(_baseService, 'get').and.callThrough();
      expect( baseServiceSpy ).not.toHaveBeenCalled();
      component.ngOnInit();
      expect(baseServiceSpy).toHaveBeenCalledTimes(1);
    }));

  });
});
