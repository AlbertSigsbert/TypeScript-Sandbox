//Used to define structure of an Object
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let person1: Person;

person1 = {
  name: "James Bond",
  age: 36,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};


person1.greet('Hello')