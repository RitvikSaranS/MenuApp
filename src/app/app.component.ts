import { Component } from '@angular/core';
import { Employee } from './Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Menu App';

  // employeeList: Empolyee[] = [
  //   {
  //     name: 'John',
  //     age: 25,
  //     position: 'Developer',
  //     salary: 300,
  //   },
  //   {
  //     name: 'Bob',
  //     age: 26,
  //     position: 'DevOps',
  //     salary: 350,
  //   },
  //   {
  //     name: 'John',
  //     age: 25,
  //     position: 'Sr. Developer',
  //     salary: 600,
  //   },
  // ];
}
