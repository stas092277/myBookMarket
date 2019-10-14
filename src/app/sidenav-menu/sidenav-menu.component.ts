import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { CategoryServiceService } from './categoryService.service';
import { Topic } from './topicBookClass';


@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.css']
})

export class SidenavMenuComponent {
  typesOfGoods: Topic[];
  showFiller = false;

  constructor(
    // tslint:disable-next-line: variable-name
    public _categoryService: CategoryServiceService,
    ) {
  }

  openBooksCateg(){
    this.showFiller = !this.showFiller;
    this.typesOfGoods = this._categoryService.getAll();
  }
}


