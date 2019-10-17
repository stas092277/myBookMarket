import { Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Categ } from '../Models/categInterface';
import { MatSidenav } from '@angular/material/sidenav';
import { BookService } from '../Services/book.service';
import { GameService } from '../Services/game.service';
import { BaseService } from '../Abstractions/base.service';
import { Type } from '../Models/enumCategs';


@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.css'],
  providers: [
    { provide: BaseService, useClass: BookService }
  ]
})

export class SidenavMenuComponent {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  typesOfGoods: Categ[];
  showFillerBook = false;
  showFillerGame = false;

  flag: Type;

  constructor(
    public _bookService: BookService,
    public _gameService: GameService
    ) {
  }


  openBooksCateg() {
    if ( !this.showFillerBook) {
      this.showFillerGame = false;
    }
    this.showFillerBook = !this.showFillerBook;

    this.typesOfGoods = this._bookService.get();

    //this.flag = 0;
  }

  openGamesCateg() {
    if ( !this.showFillerGame) {
      this.showFillerBook = false;
    }
    this.showFillerGame = !this.showFillerGame;

    this.typesOfGoods = this._gameService.get();
    //this.flag =1;
  }
}


