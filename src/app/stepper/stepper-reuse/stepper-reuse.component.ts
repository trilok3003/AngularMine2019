import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stepper-reuse',
  templateUrl: './stepper-reuse.component.html',
  styleUrls: ['./stepper-reuse.component.css']
})
export class StepperReuseComponent implements OnInit {

@Input('steps')  set setSteps(value) {
  this.steps = value;
}
  // steps = [
  //   {name: 'First', selected: false, content: "Lorizzle ipsum dolizzle stuff "},
  //   {name: 'Second', selected: false, content: " ipsum dolizzle stuff "},
  //   {name: 'Third', selected: true, content: "Lorizzle ipsum  stuff "},
  //   {name: 'Fourth', selected: false, content: "Lorizzle ipsum dolizzle  "},
  //   {name: 'Fifth', selected: false, content: "Lorizzle ipsum  stuff "}
  // ];
  steps;
  selectStepper;
  constructor() { }

  ngOnInit() {
    const step = this.steps.filter(ele => ele.selected === true)
    this.selectStepper = step[0];
  }
  onSelect(step, index) {
    this.selectStepper = step;
    this.steps.map((ele, i) => {
      if(index === i) {
        ele.selected = true
      }
      else {
        ele.selected = false
      }
    })
  }
  onNext() {
    let index;
    this.steps.forEach((ele, i) => {     
       if(ele.selected === true && i+1 < this.steps.length) {
        index = i
        ele.selected = false
      }
      if(index + 1 === i) {
        ele.selected = true
        this.selectStepper = ele;
      }
    })
  }
  onPrev() {
    let index;
    this.steps.forEach((ele, i) => {     
       if(ele.selected === true && index !== 0) {
        index = i
      }
    })
    if(index) {
      this.steps.map((ele, i) => {
        if(index -1 === i) {
          ele.selected = true;
        this.selectStepper = ele;
        }
        else {
          ele.selected = false
        }
    })
    }
  }
}
