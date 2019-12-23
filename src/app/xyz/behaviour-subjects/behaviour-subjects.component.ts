import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateModel, SimpleService } from './simple.service';

@Component({
  selector: 'app-behaviour-subjects',
  templateUrl: './behaviour-subjects.component.html',
  styleUrls: ['./behaviour-subjects.component.css']
})
export class BehaviourSubjectsComponent implements OnInit {

  state$: Observable<StateModel>;
  constructor(private _simpleStateService: SimpleService) {
    this.state$ = this._simpleStateService.stateSelector();
  }

  colorChanged(color: string) {
    this._simpleStateService.dispatchColor(color);
  }

  nameChanged(name: string) {
    this._simpleStateService.dispatchName(name);
  }
  ngOnInit() {

  }

}
