import { Injectable } from '@angular/core';
import { Employee } from '../Models/employeesInterface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employeesList: Employee[] = [
    {
      firstname: 'Генадий' ,
      lastname: 'Владимирович',
      about: [],
      departmentId: 0,
      pictureUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      firstname: 'Екатерина' ,
      lastname: 'Пугачева',
      about: [],
      departmentId: 1,
      pictureUrl: 'https://randomuser.me/api/portraits/men/15.jpg',
    },
    {
      firstname: 'Дмитрий' ,
      lastname: 'Дугин',
      about: [],
      departmentId: 0,
      pictureUrl: 'https://randomuser.me/api/portraits/women/33.jpg',
    },
    {
      firstname: 'Вера' ,
      lastname: 'Павлова',
      about: [],
      departmentId: 1,
      pictureUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      firstname: 'Евгений' ,
      lastname: 'Дуров',
      about: [],
      departmentId: 0,
      pictureUrl: 'https://randomuser.me/api/portraits/men/66.jpg',
    }
  ];

  getById(id: number)  {
    return this.employeesList.filter(tmp => tmp.departmentId === id);
  }

}
