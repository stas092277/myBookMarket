import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoryServiceService } from './categoryService.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BookListComponent } from './book-list/book-list.component';



@Component({
  selector: 'app-category-book-list',
  templateUrl: './category-book-list.component.html',
  styleUrls: ['./category-book-list.component.css']
})
export class CategoryBookListComponent{


  selectedTopic: Topic;

  typesOfBook: Topic[];
  selectBookList: Book[];


  constructor(
    private _categoryService: CategoryServiceService,
    public dialog: MatDialog
    ) {
  }



  ngOnInit() {
    this.typesOfBook = this._categoryService.getAll();
  }

  onSelect(topic: Topic): void {
    const dialogRef = this.dialog.open( BookListComponent, {
      width: '1000px',
      height: '1000px',
      data: {books: topic.books}
    }
    );
  }

}

