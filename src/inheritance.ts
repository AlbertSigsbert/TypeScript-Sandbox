class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, private admins: string []) {
    super(id, "IT");
  }

  printAdmins(){
    console.log(this.admins);
    
  }
}

const it = new ITDepartment("d2", ['Albert', 'Max']);

it.describe();

//Adding Employee
it.addEmployee("Albert");
it.addEmployee("Andre");
it.addEmployee("Brad");
it.addEmployee("Max");

//Printing Employee Info
it.printEmployeeInfo();

//Printing Admins
it.printAdmins()
