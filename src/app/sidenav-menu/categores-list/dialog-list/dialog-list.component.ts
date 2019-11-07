import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/shared/Models/categInterface';
import { CategoresListComponent } from '../categores-list.component';

@Component({
  selector: 'app-dialog-list',
  templateUrl: './dialog-list.component.html',
  styleUrls: ['./dialog-list.component.css']
})
export class DialogListComponent{

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product[],
    public dialogRef: MatDialogRef<DialogListComponent>,
  ){ }

}
