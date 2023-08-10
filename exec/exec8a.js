class Employee {
  constructor() {
    this.workingHours = 0;
  }

  addWorkingHours(hours) {
    this.workingHours += hours;
  }

  calculateTotalSalary() {
    throw new Error('This method should be overridden by child classes');
  }
}

class FulltimeEmployee extends Employee {
  calculateTotalSalary() {
    let regularRate = 100000;
    let additionalRate = 75000;
    let regularHours = Math.min(this.workingHours, 6);
    let additionalHours = Math.max(this.workingHours - 6, 0);
    return (regularRate * regularHours) + (additionalRate * additionalHours);
  }
}

class ParttimeEmployee extends Employee {
  calculateTotalSalary() {
    let regularRate = 50000;
    let additionalRate = 30000;
    let regularHours = Math.min(this.workingHours, 6);
    let additionalHours = Math.max(this.workingHours - 6, 0);
    return (regularRate * regularHours) + (additionalRate * additionalHours);
  }
}

// Example usage:
const fulltimeEmployee = new FulltimeEmployee();
fulltimeEmployee.addWorkingHours(3);
console.log('Fulltime Employee Salary:', fulltimeEmployee.calculateTotalSalary());
fulltimeEmployee.addWorkingHours(4);
console.log('Fulltime Employee Salary:', fulltimeEmployee.calculateTotalSalary());

const parttimeEmployee = new ParttimeEmployee();
parttimeEmployee.addWorkingHours(4);
console.log('Parttime Employee Salary:', parttimeEmployee.calculateTotalSalary());
parttimeEmployee.addWorkingHours(3);
console.log('Parttime Employee Salary:', parttimeEmployee.calculateTotalSalary());