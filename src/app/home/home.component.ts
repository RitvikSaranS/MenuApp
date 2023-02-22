import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { HelperService } from '../helper.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  myForm: FormGroup;
  employeeList!: Employee[];
  observer: any;
  selectedItemIndex!: number;
  ifEdit: boolean = false;
  addOrEdit: string = 'Add Employee';
  constructor(private data: HelperService, private fb: FormBuilder) {
    this.observer = this.data.getEmployeeList().subscribe({
      next: (value) => {
        this.employeeList = value.employeeList;
      },
    });
    this.myForm = this.fb.group({
      name: ['', Validators.minLength(4)],
      age: ['', Validators.minLength(4)],
      position: ['', Validators.required],
      salary: ['', Validators.required],
    });
  }
  ngOnInit(): void {}
  addEmployee(name: string, age: number, position: string, salary: number) {
    if (!this.ifEdit) {
      this.observer.next(
        this.employeeList.push({ name, age, position, salary })
      );
    } else if (this.selectedItemIndex >= 0) {
      this.observer.next(
        this.employeeList.splice(this.selectedItemIndex, 1, {
          name,
          age,
          position,
          salary,
        })
      );
      this.ifEdit = false;
      this.addOrEdit = 'Add Employee';
    }
  }
  editEmployee(employee: Employee) {
    this.addOrEdit = 'Edit Employee';
    this.selectedItemIndex = this.employeeList.indexOf(employee);
    this.myForm.setValue(employee);
    if (!this.ifEdit) {
      this.ifEdit = true;
    }
  }
  removeEmployee(employee: Employee) {
    this.selectedItemIndex = this.employeeList.indexOf(employee);
    if (confirm(`Do you want to remove ${employee.name}`)) {
      this.observer.next(
        this.observer.next(this.employeeList.splice(this.selectedItemIndex, 1))
      );
    }
  }
}
