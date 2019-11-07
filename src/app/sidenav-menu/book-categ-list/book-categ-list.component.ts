import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseService } from 'src/app/shared/Abstractions/base.service';
import { BookService } from 'src/app/shared/Services/book.service';
import { Categ } from 'src/app/shared/Models/categInterface';

@Component({
  selector: 'app-book-categ-list',
  templateUrl: './book-categ-list.component.html',
  styleUrls: ['./book-categ-list.component.css'],
  providers: [
    { provide: BaseService, useClass: BookService }
  ]
})
export class BookCategListComponent {

  // typesOfGoods: Categ[];

  // constructor(
  //   private _bookBaseSerice: BaseService ) {}

  // ngOnInit() {
  //   this.typesOfGoods = this._bookBaseSerice.get();
  // }

}
