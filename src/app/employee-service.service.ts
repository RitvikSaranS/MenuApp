import { InjectionToken } from '@angular/core';
import { EmployeeData } from './EmployeeData';

export const APP_SERVICE_CONFIG = new InjectionToken<EmployeeData>(
  'employeelist'
);
export const APP_CONFIG: EmployeeData = {
  employeeList: [
    {
      name: 'John',
      age: 25,
      position: 'Developer',
      salary: 300,
    },
    {
      name: 'Bob',
      age: 26,
      position: 'DevOps',
      salary: 350,
    },
    {
      name: 'Johnny',
      age: 25,
      position: 'Sr. Developer',
      salary: 600,
    },
  ],
};
