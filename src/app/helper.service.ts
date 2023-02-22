import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { APP_SERVICE_CONFIG } from './employee-service.service';
import { EmployeeData } from './EmployeeData';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  private employeeData: Observable<EmployeeData>;
  constructor(@Inject(APP_SERVICE_CONFIG) public data: EmployeeData) {
    this.employeeData = of(data);
  }
  getEmployeeList() {
    return this.employeeData;
  }
}
