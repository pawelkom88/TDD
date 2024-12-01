import { employee } from './readme';

export type Location = {
  building: string;
  desk: number;
  floor: number;
};

export type Employee = {
  department: string;
  id: string;
  location: Location;
  name: string;
  roles: string[];
};

export class EmployeeManagementSystem {
  employees: Employee[] = [];

  getManager(id:string): any {
    return this.employees.find((employee: Employee) =>  undefined)
  }

  findEmployeeById(id: string): Employee | undefined {
    return this.employees.find((employee: Employee) => employee.id === id);
  }

  addEmployee(newEmployee: Employee) {
    this.employees.push(newEmployee);
  }
}
