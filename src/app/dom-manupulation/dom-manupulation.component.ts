import { Component, OnInit, ViewChild, ElementRef, Directive, Input } from '@angular/core';


@Directive({selector: 'pane'})
export class Pane {
  @Input() id !: string;
}

@Component({
  selector: 'app-dom-manupulation',
  templateUrl: './dom-manupulation.component.html',
  styleUrls: ['./dom-manupulation.component.css']
})
export class DomManupulationComponent implements OnInit {
  @ViewChild('myname', {static: false}) nameInput: ElementRef;
  @ViewChild(Pane, {static: false})
  set pane(v: Pane) {
    setTimeout(() => { this.selectedPane = v.id; }, 0);
  }
  selectedPane: string = '';
  shouldShow = true;
  toggle() { this.shouldShow = !this.shouldShow; }

  constructor() { }

  ngOnInit() {
  }
  handleFocus() {
    this.nameInput.nativeElement.focus();
  }

  resetName() {
    this.nameInput.nativeElement.value = '';
  }
}
