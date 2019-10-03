import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from './categoryService.service';

@Component({
  selector: 'app-category-book-list',
  templateUrl: './category-book-list.component.html',
  styleUrls: ['./category-book-list.component.css']
})
export class CategoryBookListComponent{

  selectedTopic;
  typesOfBook;

  constructor(
    private _categoryService: CategoryServiceService
    ) {
  }

  ngOnInit() {
    this.typesOfBook = this._categoryService.getAll();
  }

  onSelect(topic): void {
    this.selectedTopic = topic;
  }

}

