import { Student } from './entities/Student.ts';
import { Product } from './entities/Product.ts';
import { Employee } from './entities/Employee.ts';

import { StudentFactory } from './factories/StudentFactory.ts';
import { ProductFactory } from './factories/ProductFactory.ts';
import { EmployeeFactory } from './factories/EmployeeFactory.ts';

const studentService = StudentFactory.getInstance();
const productService = ProductFactory.getInstance();
const employeeService = EmployeeFactory.getInstance();

const erick = new Student({ id: 1, name: 'Erick' });
const ana = new Student({ id: 2, name: 'Ana' });

const laptop = new Product({ id: 1, title: 'Laptop', price: 999.99 });
const ale = new Employee({ id: 1, name: 'Alê Pereira', role: 'programmer' });

employeeService.create(ale);
studentService.create(erick);
studentService.create(ana);

employeeService.update(ale.id, new Employee({ id: 2, name: 'Alê Pereira2', role: 'Senior Developer' }));
studentService.update(ana.id, new Student({ id: 2, name: 'Ana Silva' }));
studentService.delete(erick.id);

console.log("Students:");
for (const student of studentService.read()) {
    console.log(`ID: ${student.id}, Name: ${student.name}`);
}

productService.create(laptop);
console.log("Products:");
for (const product of productService.read()) {
    console.log(`ID: ${product.id}, Title: ${product.title}, Price: ${product.price}`);
}

console.log("Employees:");
for (const employee of employeeService.read()) {
    console.log(`ID: ${employee.id}, Name: ${employee.name}, Role: ${employee.role}`);
}