import { Employee } from './employees';

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
  managedBy: 'manager1',
};

export const createEmployee = (id: string, managedBy?: string): Employee => {
  const clonedEmployee = { ...newEmployee };
  return {
    ...clonedEmployee,
    id,
    managedBy,
  };
};
