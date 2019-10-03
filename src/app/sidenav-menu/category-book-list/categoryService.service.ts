import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor() { }

  private categoryList:Topic[] = [
  {
    name: 'Классика',
    books: ['1', '2', '3']
  },
  {
    name: 'Бизнес',
    books: ['1', '2', '3']
  },
  {
    name: 'Детские книги',
    books: ['1', '2', '3']
  },
  {
    name: 'Проза',
    books: ['1', '2', '3']
  },
  {
    name: 'Фатнастика',
    books: ['1', '2', '3']
  }
  ];

  getAll() {
    return this.categoryList;
  }

}

class Topic {
  name: string;
  books: string[];
}
