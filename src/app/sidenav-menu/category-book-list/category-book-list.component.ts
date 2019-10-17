import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog  } from '@angular/material/dialog';
import { BookListComponent } from './book-list/book-list.component';
import { Categ } from '../../Models/categInterface';

@Component({
  selector: 'app-category-book-list',
  templateUrl: './category-book-list.component.html',
  styleUrls: ['./category-book-list.component.css']
})


export class CategoryBookListComponent {

  selectedTopic: Categ;

  @Input() typesOfGoods: Categ[];

  constructor(
    // tslint:disable-next-line: variable-name
    public dialog: MatDialog
    ) {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
  }

  onSelect(topic: Categ): void {
    const dialogRef = this.dialog.open( BookListComponent, {
      width: '1200px',
      height: '1200px',
      data: {books: topic.goods}
    }
    );
  }

}

