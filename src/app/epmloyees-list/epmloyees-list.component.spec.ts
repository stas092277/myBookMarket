import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmloyeesListComponent } from './epmloyees-list.component';

describe('EpmloyeesListComponent', () => {
  let component: EpmloyeesListComponent;
  let fixture: ComponentFixture<EpmloyeesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpmloyeesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpmloyeesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
