import { Injectable } from '@angular/core';
import { Categ } from '../Models/categInterface';
import { BaseService } from '../Abstractions/base.service';

@Injectable({
  providedIn: 'root'
})

export class GameService implements BaseService {

  categoryList: Categ[] = [
    {
      name: 'Аркада',
      goods: [
        {
          name: 'Super Mario Maker 2 ',
          author: 'Nintendo',
          // tslint:disable-next-line: max-line-length
          pictureUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/2/2f/Super_Mario_Maker_2_Box_Art.png/247px-Super_Mario_Maker_2_Box_Art.png'
        }
      ]
    },
    {
      name: 'Головоломки',
      goods: [
        {
          name: 'LittleBigPlanet ',
          author: 'Sony Computer Entertainment Europe',
          pictureUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/b/b9/LittleBigPlanet.jpg/274px-LittleBigPlanet.jpg'
        }
        ,
        {
          name: 'Portal ',
          author: 'Valve Corporation',
          pictureUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4e/Portal_boxcover.jpg/274px-Portal_boxcover.jpg'
        }
      ]
    },
    {
      name: 'Файтинги',
      goods: [
        {
        name: 'Mortal Kombat 9',
        author: 'Warner Bros. Interactive Entertainment',
        // tslint:disable-next-line: max-line-length
        pictureUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/b/b2/Mortal_Kombat_%28BLES-01132%29_Front.jpg/274px-Mortal_Kombat_%28BLES-01132%29_Front.jpg'
        },
        {
          name: 'Street Fighter IV',
          author: 'Capcom',
          // tslint:disable-next-line: max-line-length
          pictureUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/8/84/Street_Fighter_IV_boxshot.jpg/274px-Street_Fighter_IV_boxshot.jpg'
        },
        {
          name: 'Tekken 3',
          author: 'PlayStation',
          pictureUrl: 'https://upload.wikimedia.org/wikipedia/ru/8/82/Tekken_3_Poster.jpg'
        }
      ]
    },
    {
      name: 'Спортивные симуляторы',
      goods: [
        {
          name: 'FIFA 20',
          author: 'Electronic Arts',
          pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/81TBYjKg1HL._SX385_.jpg'
        },
        {
          name: 'NHL 2K19',
          author: 'Electronic Arts',
          pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/61DNh7fgL9L._AC_SL1000_.jpg'
        }
      ]
    },
    {
      name: '3D-шутеры',
      goods: [
        {
          name: 'Half-Life 2',
          author: 'Valve Corporation',
          pictureUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/0/0c/HL2box.jpg/274px-HL2box.jpg'
        },
        {
          name: 'Quake II',
          author: ' Activision',
          pictureUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/b/b5/Quake2box.jpg/274px-Quake2box.jpg'
        }
      ]
    }
    ];


  get(): Categ[] {
    return this.categoryList;
  }

  update(topic: Categ)  {
    this.categoryList.forEach(
      tmp => {
      if (tmp.name === topic.name) {
        tmp.goods = topic.goods;
      }
    }
    );
  }

  delete(topic: Categ) {
    this.categoryList.filter(tmp => tmp.name !== topic.name);
  }

  add(topic: Categ) {
    this.categoryList.push(topic);
  }

}
