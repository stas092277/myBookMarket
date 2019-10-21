import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCategListComponent } from './book-categ-list.component';

describe('BookCategListComponent', () => {
  let component: BookCategListComponent;
  let fixture: ComponentFixture<BookCategListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCategListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCategListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
