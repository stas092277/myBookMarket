import { Component, OnInit, Input } from '@angular/core';
import { Categ } from 'src/app/Models/categInterface';
import { MatDialog } from '@angular/material/dialog';
import { DialogListComponent } from './dialog-list/dialog-list.component';

@Component({
  selector: 'app-categores-list',
  templateUrl: './categores-list.component.html',
  styleUrls: ['./categores-list.component.css']
})

export class CategoresListComponent{

  selectedTopic: Categ;

  @Input() typesOfGoods: Categ[];

  constructor(
    // tslint:disable-next-line: variable-name
    protected dialog: MatDialog
    ) {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
  }

  onSelect(topic: Categ): void {
    const dialogRef = this.dialog.open( DialogListComponent, {
      width: '1200px',
      height: '1200px',
      data: {books: topic.goods}
    }
    );
  }

}
