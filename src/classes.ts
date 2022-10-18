class Department {
  // private readonly id : string;
  // public name: string;
  private employees: string[] = [];

  constructor(private readonly id:string, public name: string) {
    // this.name = n;
    // this.id = id;
  }

  describe(this:Department){
    console.log(`Department (${this.id}): ${this.name}`); 
  }

  addEmployee(employee:string){
    this.employees.push(employee);
  }

  printEmployeeInfo(){
    console.log(this.employees.length);
    console.log(this.employees); 
    
  }
}


const accounting = new Department('d1', 'Accounting');


accounting.describe();

//Adding Employee via class Method
accounting.addEmployee('John');
accounting.addEmployee('Jane');

//Adding Employee directly(Not suitable)
//accounting.employees[2] = 'James';

//Printing Employee Info
accounting.printEmployeeInfo()
