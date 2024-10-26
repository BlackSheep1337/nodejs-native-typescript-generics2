import { EmployeeRepository } from '../repositories/EmployeeRepository.ts';
import { EmployeeService } from '../services/EmployeeService.ts';

export class EmployeeFactory {
  static getInstance() {
    const employeeRepository = new EmployeeRepository();
    const employeeService = new EmployeeService(employeeRepository);
    return employeeService;
  }
}