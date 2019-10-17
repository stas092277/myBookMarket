import { Injectable } from '@angular/core';
import { Categ } from '../Models/categInterface';

@Injectable({
  providedIn: 'root'
})

export abstract class BaseService {

  abstract get(): Categ[];

  abstract delete(topic: Categ);

  abstract update(topic: Categ);

  abstract add(topic: Categ);
}
