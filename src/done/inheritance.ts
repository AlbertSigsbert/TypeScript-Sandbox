class Department {
  protected employees: string[] = [];

  //Static Property
  static year: number = 2022;

  constructor(private readonly id: string, public name: string) {}

  //Static method
  static createEmployee(name:string){
    return {name}
  }

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
  private team: string[];


  //Constructor
  constructor(id: string, private admins: string[]) {
    super(id, "IT");
    this.team = [];
  }

  // Getter
  get teamMembers() {
    if (this.team.length >= 0) {
        return this.team.toString();
    }
    throw new Error("No members for now");
  }

  //Setter
  set teamMembers(value: string ) {
    if (!value) {
      return;
    }
    this.addTeam(value);
  }

  printAdmins() {
    console.log(this.admins);
  }

  addTeam(member: string) {
    this.team.push(member);
  }

  //Method overriding
  addEmployee(employee: string): void {
    //Custom Code
    console.log("Add Employee");
    //Inherited Code
    this.employees.push(employee);
  }
}

const it = new ITDepartment("d2", ["Albert", "Max"]);

it.describe();

//Static Property & Methods
console.log(Department.year);
console.log(Department.createEmployee('Hans'));


//Set team members
it.teamMembers = 'John';
it.teamMembers = 'Jackline';
it.teamMembers = 'James';

//Get team members
console.log(it.teamMembers);


// //Adding Employee
// it.addEmployee("Albert");
// it.addEmployee("Andre");
// it.addEmployee("Brad");
// it.addEmployee("Max");

// //Printing Employee Info
// it.printEmployeeInfo();

// //Printing Admins
// it.printAdmins();
