import { beforeEach, describe, expect, it } from 'vitest';
import { Employee, EmployeeManagementSystem } from './employees';

describe('Employee Management System', () => {
  let EMS: EmployeeManagementSystem;
  beforeEach(() => {
    EMS = new EmployeeManagementSystem();
  });

  it('should not allow non-existing employee to be found', () => {
    expect(EMS.findEmployeeById('dev99')).toBeUndefined();
  });

  it('should allow add an employee and find it', () => {
    const newEmployee: Employee = {
      id: 'dev88',
      name: 'John Doe',
      department: 'Engineering',
      location: {
        building: 'A1',
        floor: 2,
        desk: 10,
      },
      roles: ['developer'],
    };
    EMS.addEmployee(newEmployee);
    expect(EMS.employees).toContain(newEmployee);
  });

  it('should allow ');
});
