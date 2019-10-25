import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Employee } from '../Models/employeesInterface';
import { EmployeesService } from '../Services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  emlpoyeesList: Employee[];

  constructor(
    private route: ActivatedRoute,
    private _employeesSevice: EmployeesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>
    {
      // tslint:disable-next-line: radix
      let id = parseInt(params.get('id'));
      this.emlpoyeesList = this._employeesSevice.getById(id);
    });
  }



}
