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

export const employees: Employee[] = [];

export class EmployeeManagementSystem {
  public employees: Employee[] = [];

  public findEmployeeById(id: string): Employee | undefined {
    return this.employees.find((employee: Employee) => employee.id === id);
  }

  addEmployee(newEmployee: Employee) {
    this.employees.push(newEmployee);
  }
}
