import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoryServiceService } from '../categoryService.service';


@Component({
  selector: 'app-category-book-list',
  templateUrl: './category-book-list.component.html',
  styleUrls: ['./category-book-list.component.css']
})
export class CategoryBookListComponent{

  @Input() categoryList: Topic[];
  @Output() outToParent = new EventEmitter();

  selectedTopic: Topic;

  constructor(
    private _categoryService: CategoryServiceService
    ) {
  }

  onSelect(topic: Topic): void {
    topic.select = !topic.select;
    this.outToParent.emit(this._categoryService.getAllSelectBook());
  }

}

