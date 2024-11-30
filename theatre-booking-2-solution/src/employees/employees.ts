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
