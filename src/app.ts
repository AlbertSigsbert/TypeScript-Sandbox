//Generic Types
// const names: Array<string> = ["James", "Jackson"];

//Generic fns
// function merge<T,U>(objA: T, objB: U){
//   return Object.assign(objA,objB);
// }

// const mergedObj = merge({name:'John'}, {age:20});


// Generic Constraints
// function merge<T extends object,U extends object>(objA: T, objB: U){
//   return Object.assign(objA,objB);
// }

// const mergedObj = merge({name:'John', hobbies:['football', 'movies']}, {age:20});
// console.log(mergedObj);


//The keyof Constraint
// function test<T extends object, U extends keyof T>(obj:T, key:U){
//   return 'Value: '+ obj[key];
// }

// const value = test({name:'John'}, 'name');
// console.log(value);


//Generic classes
// class DataStorage<T>{
//   private data: T[] = [];

//   addItem(item:T){
//     this.data.push(item);
//   }

//   removeItem(item:T){
//     this.data.splice(this.data.indexOf(item), 1);
//   }

//   getItems(){
//     return [...this.data];
//   }
// }

// //Working with strings
// const txtStorage = new DataStorage<string>();
// txtStorage.addItem('John');
// txtStorage.addItem('Kevin');
// txtStorage.removeItem('John');
// console.log(txtStorage.getItems());

// //Working with numbers
// const numStorage = new DataStorage<number>();
// numStorage.addItem(1);
// numStorage.addItem(2);
// numStorage.removeItem(2);
// console.log(numStorage.getItems());


//Generic utility types
//Partial
interface student{
  name:string;
  age:number;
  student_id:string;
}

function createStudent(name:string, age:number,id: string): student{
   let myStudent: Partial<student> = {};

   myStudent.name = name;
   myStudent.age = age;
   myStudent.student_id = id;

   return myStudent as student;
}

//Readonly
const names: Readonly<string[]> = ['John', 'Kelvin'];
names.push('Jane');
names.pop();