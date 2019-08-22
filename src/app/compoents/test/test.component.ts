import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private _shared: SharedService) { }
   vehicles: Observable<Array<any>>;
  ngOnInit() {
    this.vehicles = this._shared.getVehicles();
  }

}
