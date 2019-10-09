import { Component, OnInit, Input, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Book } from '../topicBookClass';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent{

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Book[],
    public dialogRef: MatDialogRef<BookListComponent>,
  ){ }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}

