import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  navbars = ['Dashboard', 'Orders', 'Products', 'Customers', 'Reports', 'Integrations'];
  savedReports = ['Current month', '  Last quarter', 'Social engagement', 'Year-end sale'];
  constructor() { }

  ngOnInit() {
  }

}
