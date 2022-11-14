//Class decorator
// function Logger(constructor: Function) {
//   console.log("Logging ...");
//   console.log(constructor);
// }

//Decorator Factory
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

@Logger('LOGGING - PERSON')
class Person {
  name = "Albert";

  constructor() {
    console.log("Creating a person object ...");
  }
}

const person = new Person();
console.log(person);
