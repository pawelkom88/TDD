import { beforeEach, describe, expect, it } from 'vitest';
import { EmployeeManagementSystem } from './employees';

describe('Employee Management System', () => {
  let EMS: EmployeeManagementSystem;
  beforeEach(() => {
    EMS = new EmployeeManagementSystem();
  });
  it('should not allow non-existing employee to be found', () => {
    expect(EMS.getEmployeebyId('dev99')).toBeUndefined();
  });
});
