import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { CategoryServiceService } from './categoryService.service';
import { Topic } from './topicInterface';


@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.css']
})

export class SidenavMenuComponent {
  typesOfGoods: Topic[];
  showFillerBook = false;
  showFillerGame = false;

  constructor(
    // tslint:disable-next-line: variable-name
    public _categoryService: CategoryServiceService,
    ) {
  }

  openBooksCateg() {
    if ( !this.showFillerBook) {
      this.showFillerGame = false;
    }
    this.showFillerBook = !this.showFillerBook;
    this.typesOfGoods = this._categoryService.getAllBooks();
  }

  openGamesCateg() {
    if ( !this.showFillerGame) {
      this.showFillerBook = false;
    }
    this.showFillerGame = !this.showFillerGame;
    this.typesOfGoods = this._categoryService.getAllGames();
  }
}


