import { Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';



@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.css'],

})

export class SidenavMenuComponent {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  showFillerBook = false;
  showFillerGame = false;

  constructor(
    ) {
  }


  openBooksCateg() {
    if ( !this.showFillerBook) {
      this.showFillerGame = false;
    }
    this.showFillerBook = !this.showFillerBook;
  }

  openGamesCateg() {
    if ( !this.showFillerGame) {
      this.showFillerBook = false;
    }
    this.showFillerGame = !this.showFillerGame;
  }

}


