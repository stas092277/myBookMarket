import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { CategoryServiceService } from './categoryService.service';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.css']
})
export class SidenavMenuComponent{
  showFiller = false;

  typesOfBook: Topic[];
  selectBookList: Book[];

  constructor(
    private _categoryService: CategoryServiceService
    ) {
  }

  ngOnInit() {
    this.typesOfBook = this._categoryService.getAll();
    this.selectBookList = this._categoryService.getAllSelectBook();
  }

  receiveFromChild($event) {
    this.selectBookList = $event;
  }

}


