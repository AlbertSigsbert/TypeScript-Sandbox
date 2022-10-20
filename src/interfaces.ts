//Used to define structure of an Object
interface Named {
    readonly name: string;
}
interface Greetable extends Named {
  
  age: number;
  greet(phrase: string): void;
}

//Class Implementation
class Person implements Greetable {
  constructor(public name: string, public age: number, public gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }

  otherMethod() {
    console.log("hello world");
  }
}

let person1: Greetable;

person1 = new Person("John", 23, "Male");
person1.greet("Hello");

//Object Implementation
person1 = {
  name: "James Bond",
  age: 36,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};
