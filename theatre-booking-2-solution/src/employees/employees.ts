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
  managedBy?: string;
};

export class EmployeeManagementSystem {
  private employees: Employee[] = [];

  public get allEmployees(): Employee[] {
    return this.employees;
  }
  public isManagedBy({
    managerId,
    managed,
  }: {
    managerId: string;
    managed: string;
  }): string | boolean {
    const isManaged = this.employees.some(
      (employee: Employee) =>
        employee.managedBy === managerId && employee.id === managed
    );

    if (isManaged) return managerId;
    return false;
  }

  public findEmployeeById(id: string): Employee | undefined {
    return this.employees.find((employee: Employee) => employee.id === id);
  }

  public addEmployee(newEmployee: Employee) {
    this.employees.push(newEmployee);
  }
}
