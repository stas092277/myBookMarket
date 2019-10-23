import { Injectable } from '@angular/core';
import { Categ, Group, Product } from '../Models/categInterface';

@Injectable({
  providedIn: 'root'
})

export abstract class BaseService {

  abstract groupProduct: Group;

  abstract categoryList: Categ[];

  abstract get(): Group;

  abstract delete(product: Product);

  abstract update(product: Product);

  abstract add(product: Product);

  abstract getProductByCateg( categ: Categ): Product[];

  abstract getCategs(): Categ[];
}
