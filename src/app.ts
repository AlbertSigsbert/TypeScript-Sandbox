//Class decorator
// function Logger(constructor: Function) {
//   console.log("Logging ...");
//   console.log(constructor);
// }

//Decorator Factory
// function Logger(logString: string) {
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   }
// }

//Decorators as templates
function withTemplate(template:string, elementId:string){
  return function (constructor: any){
    const el = document.getElementById(elementId);
    const p = new constructor();
    if(el){
      el.innerHTML = template;
      el.textContent = p.name;
    }
  }
}

// @Logger('LOGGING - PERSON')
@withTemplate('<h1>Decorator Template</h1>', 'app')
class Person {
  name = "Albert";

  constructor() {
    console.log("Creating a person object ...");
  }
}

const person = new Person();
console.log(person);
