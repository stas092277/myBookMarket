import { Component, OnInit, Input } from '@angular/core';
import { Categ, Product, Group } from 'src/app/Models/categInterface';
import { MatDialog } from '@angular/material/dialog';
import { DialogListComponent } from './dialog-list/dialog-list.component';
import { BaseService } from 'src/app/Abstractions/base.service';

@Component({
  selector: 'app-categores-list',
  templateUrl: './categores-list.component.html',
  styleUrls: ['./categores-list.component.css']
})

export class CategoresListComponent{

  selectedProducts: Product[];

  group: Group;

  typesOfGoods: Categ[];

  constructor(
    // tslint:disable-next-line: variable-name
    protected dialog: MatDialog,
    private _baseSerice: BaseService
    ) {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.typesOfGoods = this._baseSerice.getCategs();
    this.group = this._baseSerice.get();
  }

  onSelect(topic: Categ): void {
    const dialogRef = this.dialog.open( DialogListComponent, {
      width: '1200px',
      height: '1200px',
      data: {products: this._baseSerice.getProductByCateg(topic)}
    }
    );
  }

}
