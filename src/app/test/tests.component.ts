import { Component, OnInit } from '@angular/core';
import { StateService } from '../state-store/state.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  constructor(private service: StateService) { }

  ngOnInit() {
  }

  addState(code: string, name: string) {
    this.service.addState(code, name);
}

}
