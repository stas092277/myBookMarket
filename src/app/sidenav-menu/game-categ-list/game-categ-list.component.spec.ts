import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCategListComponent } from './game-categ-list.component';

describe('GameCategListComponent', () => {
  let component: GameCategListComponent;
  let fixture: ComponentFixture<GameCategListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameCategListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCategListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
