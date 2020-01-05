import { Component, OnInit } from '@angular/core';
// class
class Person {
  firstName = "";
  lastName = "";
// private  firstName = ""; // private acces modifiers

  constructor(firstName, lastName) {
     this.firstName = firstName;
     this.lastName = lastName;
  }
  name() {
    return `${this.firstName} ${this.lastName}`;
  }
  whoAreYou() {
    return `Hi i m ${this.name()}`;
  }
}
// inheritance
class Student extends Person {
  course;
  constructor(firstName, lastName, course) {
    super(firstName, lastName);
    this.course = course;
  }
  whoAreYou() {
    return `${super.whoAreYou()} and i'm studying ${this.course}`; 
  }
}
// constructor shortcut
class Person1 {
  constructor(private firstName, private lastName) {
  }
}
// access modifiers
class Person2 {
  private firstName = "";
  private lastName = "";

  constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
  }
}
// interfaces
interface Human {
  firstName: string;
  lastName: string;
  naem?: Function;
  isLate?(time: Date): Function;
}
class Person3 implements Human {
  constructor(public firstName, public lastName) {
  }

  public name() {
    return `${this.firstName} ${this.lastName}`;
  }

  protected whoAreYou() {
    return `Hi i'm ${this.name()}`;
  }
}
class Student1 extends Person3 {
  constructor(public firstName, public lastName, public course) {
    super(firstName, lastName);
  }
  whoAreYou() {
    return `${super.whoAreYou()} and i'm studying ${this.course}`;
  }
}
@Component({
  selector: 'app-class-interface',
  templateUrl: './class-interface.component.html',
  styleUrls: ['./class-interface.component.css']
})
export class ClassInterfaceComponent implements OnInit {
   trilok = new Person("trilok", "singh"); // class instance
   trilok1 = new Student("trilok", "singh", "Angular 8");
    trilok3 = new Student1("trilok", "singh", "typescript");
  constructor() { }

  ngOnInit() {
  
  }

}
