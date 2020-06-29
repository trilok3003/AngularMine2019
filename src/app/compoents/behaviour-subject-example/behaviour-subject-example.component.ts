import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-behaviour-subject-example',
  templateUrl: './behaviour-subject-example.component.html',
  styleUrls: ['./behaviour-subject-example.component.css']
})
export class BehaviourSubjectExampleComponent implements OnInit {
   items:any =[];
   item;
   items1:any =[];
   item1;
  constructor(public shared_:SharedService) { }

  ngOnInit() {
    this.getAddListAsBehaviourSubject();
    this.getAddListAsSubject();
  }
  onAddAsBehaviour() {
    this.shared_.add(this.item);
  }
  onAddAsSubject() {
    this.shared_.add1(this.item1);
  }
  getAddListAsBehaviourSubject(){
    this.shared_.data.subscribe(res=>{
    this.items.push(res);
    })
  }
  getAddListAsSubject(){
    this.shared_.data1.subscribe(res=>{
      this.items1.push(res);
      })
  }
}
