import { Component, OnInit } from '@angular/core';
import { CategoresListComponent } from '../categores-list/categores-list.component';
import { MatDialog } from '@angular/material/dialog';
import { BaseService } from 'src/app/Abstractions/base.service';
import { GameService } from 'src/app/Services/game.service';
import { Categ } from 'src/app/Models/categInterface';

@Component({
  selector: 'app-game-categ-list',
  templateUrl: './game-categ-list.component.html',
  styleUrls: ['./game-categ-list.component.css'],
  providers: [
    { provide: BaseService, useClass: GameService }
  ]
})
export class GameCategListComponent {

  // typesOfGoods: Categ[];

  // constructor( private _gameBaseSerice: BaseService ){}

  // ngOnInit() {
  //   this.typesOfGoods = this._gameBaseSerice.get();
  // }

}
