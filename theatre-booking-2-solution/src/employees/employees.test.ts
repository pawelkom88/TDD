import { beforeEach, describe, expect, it } from 'vitest';
import { Employee, EmployeeManagementSystem } from './employees';
import { createEmployee } from './employeeFactory';

describe('Employee Management System', () => {
  let EMS: EmployeeManagementSystem;
  beforeEach(() => {
    EMS = new EmployeeManagementSystem();
  });

  it('should not allow non-existing employee to be found', () => {
    expect(EMS.findEmployeeById('dev99')).toBeUndefined();
  });

  it('should allow add an employee and find it', () => {
    const newEmployee1: Employee = createEmployee('dev1', 'mgr1');
    const newEmployee2: Employee = createEmployee('dev2', 'mgr1');

    EMS.addEmployee(newEmployee1);
    EMS.addEmployee(newEmployee2);

    expect(EMS.allEmployees).toContain(newEmployee1);
    expect(EMS.allEmployees).toContain(newEmployee2);
  });

  it('should not find a relationship if there is no manager', () => {
    const newEmployee1: Employee = createEmployee('dev2');

    expect(
      EMS.isManagedBy({ managerId: '', managed: newEmployee1.id })
    ).toBeFalsy();
  });

  it('should find a relationship if there is a manager and employee', () => {
    const newEmployee1: Employee = createEmployee('dev2', 'mgr1');
    EMS.addEmployee(newEmployee1);
    expect(
      EMS.isManagedBy({ managerId: 'mgr1', managed: newEmployee1.id })
    ).toBe('mgr1');
  });

  it('should not find a relationship between two existing employees if they are managed by different managers', () => {
    const newEmployee1: Employee = createEmployee('dev3', 'mgr1');
    const newEmployee2: Employee = createEmployee('dev4', 'mgr2');
    expect(
      EMS.isManagedBy({ managerId: 'mgr1', managed: newEmployee1.id })
    ).toBeFalsy();

    expect(
      EMS.isManagedBy({ managerId: 'mgr1', managed: newEmployee2.id })
    ).toBeFalsy();
  });
});
