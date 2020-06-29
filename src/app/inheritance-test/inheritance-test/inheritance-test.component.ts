import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/interfaces';
const employees: Employee[] = [
  { id: 0, firstName: 'Abc', lastName: 'gum', email: 'la.com' },
  { id: 1, firstName: 'Xyz', lastName: 'rum', email: 'ds@hansolo.com' },
  { id: 2, firstName: 'asd', lastName: 'some', email: 's@leiaorgana.com' },
];

@Component({
  selector: 'app-inheritance-test',
  templateUrl: './inheritance-test.component.html',
  styleUrls: ['./inheritance-test.component.css']
})

export class InheritanceTestComponent implements OnInit {

  displayTable = true;
  employees = employees
  selectedEmployee = employees[0];

  constructor() { }

  ngOnInit() { }

  selectEmployee(employee: Employee) {
    this.selectedEmployee = employee;
  }

}
