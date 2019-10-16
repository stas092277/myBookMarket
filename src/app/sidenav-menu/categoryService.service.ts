import { Injectable } from '@angular/core';
import { Topic } from './topicInterface';

@Injectable({
  providedIn: 'root'
})

export class CategoryServiceService {

  constructor() { }

  private booksList: Topic[] = [
  {
    name: 'Классика',
    goods: [
      {
        name: 'Одиссея',
        author: 'Гомер',
        // tslint:disable-next-line: max-line-length
        pictureUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABuCAMAAACzxqVeAAAA1VBMVEUAAAD3izf5nET4jzv0WB31ZCT2gjHybyT0diz3aSj2hzXyYR38YyJzMRj1nkrydij////5lT/yZyH0fSz4fDDd3d33giP5+fmOjo6bm5tpaWnV1dW7u7tMTEyrq6vHx8fn5+dZWVmPORX85c7vZziBgYEzMzMoKCg9PT3w8PBzc3NhYWEbGxuSUCGVZjXltJQQEBCyRh2RWSqRRR39Vxz6uX30tYrtpYT5wJDxoIP78unrzKftuJHqmm71iUH51LHuVwD44Nf1mlfyv4P0x5LwjWXydT8HgPkkAAACSUlEQVRYhe3WbW/aMBAA4COE0IYOLkCwTRLHwAx5AZoF1tGua/f+/3/SHNpNnTppgTAVNPvDyUmcR77TRQ7UzUbNMmrNM+PiFew62larXjPPbcuwQUMa0pCG/h9oKOXoIJDr+QlE2c/L6UyFaC8oARACA44gceaLWHIhyHwPSEJKgIXcDb04QBaGzId4tBcUIHCfyziJI4ymag4Y7A6FKjU/FnMmFTqjsRgyEvM9arQd2dOZ2tE+xX4+gmftcKKdrSENaUhDGvp3UCAIK6IrgsydAmMwddF/CK4rEmBCyDIQ+gkmkMYSRxlGEXIg4XBUhHSOlEYJSpeVgFJUJ2wI0gWioLkQXJ3cANswwyQFGkNYBkrUG9wDHhYQ4Z7PCxqGZAsRdfoLgmWgAGfg+eBJIAEQBJ9HOFW/RhgVULHC56V2BG7s4ZShcNHNkEKoUFQhVCFDVWe1Za8UBIxH6nVKKQGqckoBKE8eAqUskENIRqX7SBZ/erRaH+0wNKQhDWlIQy8FvckXy+VitVyMHyf5eJXny3yVL8fFrVzdWo1/LVos8j9DDbPWMZxO12iurb5j9C4ca920bMPqWo5p1ntGvdk0ztfbRS2jv+736sZfINPuKKjl2OaZguyu/QQqnm0hcwfIOjroYKnpGp1iarpGpwgduNiDVs9ZHwB6e/XuanPdqAwNJnhzg/i6co0GE3L5flIRsh6h2yOD8MNdVWhbo/vJx8HmU/Udff6yubz9ev2tVrmP2vb3u3bjEJ/I72f/MXxrxwS9SGo/APEUrSlGKke1AAAAAElFTkSuQmCC'
      },
      {
        name: 'Фауст',
        author: 'Иоганн Вольфганг фон Гете',
        // tslint:disable-next-line: max-line-length
        pictureUrl: 'data:image/jpeg;base64,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'
      },
      {
        name: 'Война и мир',
        author: 'Лев Николаевич Толстой ',
        pictureUrl: 'https://s5-goods.ozstatic.by/1000/338/812/10/10812338_0.jpg'
      }
    ]
  },
  {
    name: 'Бизнес',
    goods: [
      {
        name: 'Хватит мечтать, займись делом!',
        author: 'Кэл Ньюпорт',
        pictureUrl: 'https://www.alpinabook.ru/upload/resize_cache/iblock/d6c/380_567_1/d6c6daf4ab8e561be7ed09a074962095.jpg'
      }
      ,
      {
        name: 'Чёрный лебедь',
        author: 'Нассим Талеб',
        pictureUrl: 'https://cdn1.ozone.ru/multimedia/1011915048.jpg'
      }
    ]
  },
  {
    name: 'Детские книги',
    goods: [
      {
      name: 'Гарри Поттер',
      author: 'Джоан Роулинг',
      pictureUrl: 'http://russian7.ru/wp-content/uploads/2015/11/HarryPotter_4.jpg'
      },
      {
        name: 'Малыш и Карлсон',
        author: 'Астрид Линдгрен',
        pictureUrl: 'http://russian7.ru/wp-content/uploads/2015/11/bigi4d99ae61bac1e.jpg'
      },
      {
        name: 'Книга джунглей',
        author: 'Редьярд Киплинг',
        pictureUrl: 'http://russian7.ru/wp-content/uploads/2015/11/Jungle_Book_Rudyard_Kipling_poster.jpg'
      }
    ]
  },
  {
    name: 'Проза',
    goods: [
      {
        name: '11/22/63',
        author: 'Стивен Кинг',
        pictureUrl: 'https://i2.mybook.io/p/256x426/book_covers/1a/c6/1ac686a9-0fa8-4e72-a70a-77e858117761.jpe'
      },
      {
        name: 'Марсианин',
        author: 'Энди Вейер',
        pictureUrl: 'https://i3.mybook.io/p/256x426/book_covers/50/e6/50e66da6-cf26-488f-9629-264ebac5644d.jpe'
      },
      {
        name: 'Американские боги',
        author: 'Нил Гейман',
        pictureUrl: 'https://i3.mybook.io/p/256x426/book_covers/1b/87/1b8722a9-d305-4a18-8e0c-796c931c7b64.jpe'
      }
    ]
  },
  {
    name: 'Фатнастика',
    goods: [
      {
        name: 'Властелин колец',
        author: 'Джон Толкин',
        pictureUrl: 'https://img-gorod.ru/24/233/2423346_detail.jpg'
      }
    ]
  }
  ];


  private gamesList: Topic[] = [
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

  getAllBooks(): Topic[] {
    return this.booksList;
  }

  getAllGames(): Topic[] {
    return this.gamesList;
  }

}

