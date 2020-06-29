import { Component, OnInit, Input } from '@angular/core';
export class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}
@Component({
  selector: 'app-content-projection1',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css'],
   // encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.Native
  // encapsulation: ViewEncapsulation.None
})
export class ContentProjectionComponent1 implements OnInit {
  @Input('joke') data: Joke;
  constructor() { }

  ngOnInit() {
  }

}
