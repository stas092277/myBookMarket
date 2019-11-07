import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCategListComponent } from './book-categ-list.component';
import { CategoresListComponent } from '../categores-list/categores-list.component';
import { BaseService } from 'src/app/shared/Abstractions/base.service';
import { BookService } from 'src/app/shared/Services/book.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BookCategListComponent', () => {
  let component: BookCategListComponent;
  let fixture: ComponentFixture<BookCategListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCategListComponent ],
      providers: [
        { provide: BaseService, useClass: BookService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  describe(':', () => {

    function setup() {
      const fixture = TestBed.createComponent(BookCategListComponent);
      const component = fixture.debugElement.componentInstance;
      return { fixture, component };
    }

    it('should create', () => {
      const { component } = setup();
      expect(component).toBeTruthy();
    });

  });
});
