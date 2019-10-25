import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/Models/employeesInterface';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  @Input() employeer: Employee;
  boolEditInfo = false;

  constructor(
    private _employeesSevice: EmployeesService
  ) { }

  ngOnInit() {
    console.log();
  }

  addEmplyeeAbout(info: string, employee: Employee ) {
    this._employeesSevice.postAddAbout(employee, info);
  }
}
