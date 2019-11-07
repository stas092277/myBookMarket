import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCategListComponent } from './game-categ-list.component';
import { BaseService } from 'src/app/shared/Abstractions/base.service';
import { GameService } from 'src/app/shared/Services/game.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('GameCategListComponent', () => {
  let component: GameCategListComponent;
  let fixture: ComponentFixture<GameCategListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameCategListComponent ],
      providers: [
        { provide: BaseService, useClass: GameService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  describe(':', () => {

    function setup() {
      const fixture = TestBed.createComponent(GameCategListComponent);
      const component = fixture.debugElement.componentInstance;
      return { fixture, component };
    }

    it('should create', () => {
      const { component } = setup();
      expect(component).toBeTruthy();
    });

  });
});
