import { Component } from '@angular/core';
import { EmployeeComponent } from './employee.component';

@Component({
  selector: 'app-employee-list',
  template: `
    <h1>{{heading}}</h1>
    <ul class="list-group">
      <li *ngFor="let employee of employees" class="list-group-item">
        {{employee.firstName}} {{employee.lastName}} 
        {{employee.email}} 
        <button (click)="selectEmployee(employee)" class="btn btn-primary">Select</button>
      </li>
    </ul>
  `
})
export class EmployeeListComponent extends EmployeeComponent {
  heading = 'Employee List';
}
