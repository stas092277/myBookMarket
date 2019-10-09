import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBookListComponent } from './category-book-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CategoryServiceService } from './categoryService.service';

describe('CategoryBookListComponent', () => {
  let component: CategoryBookListComponent;
  let fixture: ComponentFixture<CategoryBookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryBookListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        MatDialog,
        CategoryServiceService
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
