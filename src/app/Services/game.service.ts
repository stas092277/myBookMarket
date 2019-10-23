import { Injectable } from '@angular/core';
import { Categ, Group, Product } from '../Models/categInterface';
import { BaseService } from '../Abstractions/base.service';

@Injectable({
  providedIn: 'root'
})

export class GameService implements BaseService {


  categoryList: Categ[] = [
      {
        id: 0,
        name: 'Аркада',
      },
      {
        id: 1,
        name: 'Головоломки',
      },
      {
        id: 2,
        name: 'Файтинги',
      },
      {
        id: 3,
        name: 'Спортивные симуляторы',
      },
      {
        id: 4,
        name: '3D-шутеры',
      }
    ];

  groupProduct: Group = {
    id: 0,
    nameGroup: 'игры',
    productList: [
    {
      name: 'Super Mario Maker 2 ',
      author: 'Nintendo',
      // tslint:disable-next-line: max-line-length
      pictureUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/2/2f/Super_Mario_Maker_2_Box_Art.png/247px-Super_Mario_Maker_2_Box_Art.png',
      category:
      {
        id: 0,
        name: 'Аркада',
      },
    },
    {
      name: 'LittleBigPlanet ',
      author: 'Sony Computer Entertainment Europe',
      pictureUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/b/b9/LittleBigPlanet.jpg/274px-LittleBigPlanet.jpg',
      category:
      {
        id: 0,
        name: 'Аркада',
      },
    },
    {
      name: 'Portal ',
      author: 'Valve Corporation',
      pictureUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4e/Portal_boxcover.jpg/274px-Portal_boxcover.jpg',
      category:
      {
        id: 1,
        name: 'Головоломки',
      },
    },
    {
      name: 'Mortal Kombat 9',
      author: 'Warner Bros. Interactive Entertainment',
      // tslint:disable-next-line: max-line-length
      pictureUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/b/b2/Mortal_Kombat_%28BLES-01132%29_Front.jpg/274px-Mortal_Kombat_%28BLES-01132%29_Front.jpg',
      category:
      {
        id: 2,
        name: 'Файтинги',
      },
    },
    {
      name: 'Street Fighter IV',
      author: 'Capcom',
      // tslint:disable-next-line: max-line-length
      pictureUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/8/84/Street_Fighter_IV_boxshot.jpg/274px-Street_Fighter_IV_boxshot.jpg',
      category:
      {
        id: 2,
        name: 'Файтинги',
      },
    },
    {
      name: 'Tekken 3',
      author: 'PlayStation',
      pictureUrl: 'https://upload.wikimedia.org/wikipedia/ru/8/82/Tekken_3_Poster.jpg',
      category:
      {
        id: 2,
        name: 'Файтинги',
      },
    },
    {
      name: 'FIFA 20',
      author: 'Electronic Arts',
      pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/81TBYjKg1HL._SX385_.jpg',
      category:
      {
        id: 3,
        name: 'Спортивные симуляторы',
      },
    },
    {
      name: 'NHL 2K19',
      author: 'Electronic Arts',
      pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/61DNh7fgL9L._AC_SL1000_.jpg',
      category:
      {
        id: 3,
        name: 'Спортивные симуляторы',
      },
    },
    {
      name: 'Half-Life 2',
      author: 'Valve Corporation',
      pictureUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/0/0c/HL2box.jpg/274px-HL2box.jpg',
      category:
      {
        id: 4,
        name: '3D-шутеры',
      },
    },
    {
      name: 'Quake II',
      author: ' Activision',
      pictureUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/b/b5/Quake2box.jpg/274px-Quake2box.jpg',
      category:
      {
        id: 4,
        name: '3D-шутеры',
      },
    }
    ]
  }


  get(): Group {
    return this.groupProduct;
  }

  update(topic: Product)  {
    // this.groupProduct.productList.forEach(
    //   tmp => {
    //   if (tmp.name === topic.name) {
    //     tmp.goods = topic.goods;
    //   }
    // }
    // );
  }

  delete(product: Product) {
    this.groupProduct.productList.filter(tmp => tmp.name !== product.name);
  }

  add(product: Product) {
    this.groupProduct.productList.push(product);
  }

  getProductByCateg( categ: Categ): Product[] {
    return this.groupProduct.productList.filter(tmp => tmp.category.id === categ.id);
  }

  getCategs(): Categ[] {
    return this.categoryList;
  }
}
