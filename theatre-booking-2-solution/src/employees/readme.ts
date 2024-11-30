// We will store employees
// We can also store relationship between those employees e.g manager -> employee
//
//

type Employee = {
  id: string;
  name: string;
  department: string;
  roles: string[];
  location: {
    building: string;
    floor: number;
    desk: number;
  };
};

const employee: Employee = {
  id: 'emp1',
  name: 'Bill Smith',
  department: 'IT',
  roles: ['developer', 'first aider'],
  location: {
    building: 'IC1',
    floor: 1,
    desk: 27,
  },
};
