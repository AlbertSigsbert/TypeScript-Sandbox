//Class decorator
// function Logger(constructor: Function) {
//   console.log("Logging ...");
//   console.log(constructor);
// }

//Decorator Factory
// function Logger(logString: string) {
//   console.log('LOGGER FACTORY');

//   return function (constructor: Function) {
//     console.log('LOGGER DECORATOR');
//     console.log(logString);
//     console.log(constructor);
//   }
// }

//Decorators as templates
// function withTemplate(template:string, elementId:string){
//   console.log('TEMPLATE FACTORY');

//   return function (constructor: any){
//     console.log('TEMPLATE DECORATOR');

//     const el = document.getElementById(elementId);
//     const p = new constructor();
//     if(el){
//       el.innerHTML = template;
//       el.textContent = p.name;
//     }
//   }
// }

//Multiple Decorators
// @Logger('LOGGING - PERSON')
// @withTemplate('<h1>Decorator Template</h1>', 'app')
// class Person {
//   name = "Albert";

//   constructor() {
//     console.log("Creating a person object ...");
//   }
// }

// const person = new Person();
// console.log(person);

//Property Decorators
function Log(target: any, propertyName: string | Symbol) {
  console.log("PROPERTY DECORATOR");
  console.log(target, propertyName);
}

//Accessor decorator
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("ACCESSOR DECORATOR");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

//Method decorator
function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("METHOD DECORATOR");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

//Parameter decorator
function Log4(target: any, name: string | Symbol, position:number) {
  console.log("PARAM DECORATOR");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  //A setter
  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Price must be positive");
    }
  }

  //A method
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}
