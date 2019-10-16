import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Product } from '../../topicInterface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent{

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product[],
    public dialogRef: MatDialogRef<BookListComponent>,
  ){ }


}

