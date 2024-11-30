// We will store employees
// We can also store relationship between those employees e.g. manager -> employee
// Is non-existent employee not found ?
// can we store a single employee and then find them ?
// if there is no manager fot an employee  then we should get no relationship
// can we store 2 employees and then find them ?
// if we add a relationship between two non-existing employees it is rejected
// if we add a relationship between 1 existing and 1 non-existing employee it is rejected
// if we add a relationship between 2 existing employees can it be found ?
// can we find the team under a specific manager ?

export const employee: Employee = {
  department: 'IT',
  id: 'emp1',
  location: {
    building: 'IC1',
    floor: 1,
    desk: 27,
  },
  name: 'Bill Smith',
  roles: ['developer', 'first aider'],
};
