import { Component, OnInit, Input, Inject, forwardRef } from '@angular/core';
import { Task } from '../task';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-sub-tasks',
  templateUrl: './sub-tasks.component.html',
  styleUrls: ['./sub-tasks.component.css'],
})
export class SubTasksComponent implements OnInit {
  private subTasks:Array<Task> = [];
  private _tasks:TasksComponent;
  @Input()  taskIndex
  constructor(@Inject(forwardRef(() => TasksComponent)) tasks) { 
   this._tasks = tasks;
  }

  ngOnInit() {
  }
  add(newSubTask):void {
    if(newSubTask.length > 0){
      this.subTasks.push(new Task(newSubTask));
    }
  }
  
  remove(index:number):void{
    if(index !== -1){
      this.subTasks.splice(index, 1);
    }
    
    if(this.subTasks.length === 0){
      this._tasks.remove(this.taskIndex);
    }
  }
}
