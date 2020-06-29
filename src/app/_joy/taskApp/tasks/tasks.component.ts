import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  private _tasks:Array<Task> = [];
  private _newTask:string = '';
  constructor() { }

  ngOnInit() {
  }
  get tasks():Array<Task> {
    return this._tasks;
  }
  
  get newTask():string {
    return this._newTask;
  }
  
  set newTask(newTask) {
    this._newTask = newTask;
  }
  
  add():void {
    if(this._newTask.length > 0){
      this._tasks.push(new Task(this.newTask));
      this.newTask = '';
    }
  }
  
  remove(index):void {
    this._tasks[index].deactive();
  }
}
