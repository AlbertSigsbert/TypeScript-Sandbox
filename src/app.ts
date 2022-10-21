//TYPE GUARDS
type Combinable = number | string;

function add(a: Combinable, b: Combinable) {
  //Type Guard (Common JS Types)
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

//TYPE GUARDS IN OBJECTS
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type UnknownEmployee = Admin | Employee;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);

  //Type Guard
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("startDate: " + emp.startDate);
  }
}

const e1: Admin = {
  name: "James",
  privileges: ["create-server"],
};

const e2: Employee = {
  name: "Jane",
  startDate: new Date(),
};

printEmployeeInfo(e1);
console.log("NORMAL EMPLOYEE");
printEmployeeInfo(e2);

//TYPE GUARDS IN CLASSES
class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving Truck...");
  }

  loadCargo(load: number) {
    console.log("Load Cargo: " + load);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(v: Vehicle) {
  v.drive();

  //Type Guard
  if (v instanceof Truck) {
    v.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);
