class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this:Department){
    console.log('Department: '+ this.name); 
  }

  addEmployee(employee:string){
    this.employees.push(employee);
  }

  printEmployeeInfo(){
    console.log(this.employees.length);
    console.log(this.employees); 
    
  }
}


const accounting = new Department('Accounting');


accounting.describe();

//Adding Employee via class Method
accounting.addEmployee('John');
accounting.addEmployee('Jane');

//Adding Employee directly(Not suitable)
//accounting.employees[2] = 'James';

//Printing Employee Info
accounting.printEmployeeInfo()
