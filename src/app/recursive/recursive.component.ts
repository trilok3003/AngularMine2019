import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recursive',
  templateUrl: './recursive.component.html',
  styleUrls: ['./recursive.component.css']
})
export class RecursiveComponent implements OnInit {
  @Input() comments;
  @Input() items;
constructor() { }

  ngOnInit() {
  }

}
