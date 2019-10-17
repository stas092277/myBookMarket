import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogListComponent } from './dialog-list.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DialogListComponent', () => {
  let component: DialogListComponent;
  let fixture: ComponentFixture<DialogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{
        provide: MatDialogRef,
        useValue: {}
      }, {
        provide: MAT_DIALOG_DATA,
        useValue: { }
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get not null data', () => {
    expect(component.data).toBeTruthy();
  });
});
