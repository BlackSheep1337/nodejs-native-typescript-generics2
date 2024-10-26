export class Employee {
  id: number;
  name: string;
  role: string;
  constructor({ id, name, role }: {id: number, name: string, role: string}) {
    this.id = id;
    this.name = name;
    this.role = role;
  }
}