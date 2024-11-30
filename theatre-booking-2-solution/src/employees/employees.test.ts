import { beforeEach, describe, it } from 'vitest';
import { EmployeeManagementSystem } from './employees';

describe('Employee Management System', () => {
  let EMS;
  beforeEach(() => {
    EMS = new EmployeeManagementSystem();
  });
  it('should not allow non-existing employee to be found', () => {});
});
