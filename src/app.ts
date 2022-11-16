//Class decorator
// function Logger(constructor: Function) {
//   console.log("Logging ...");
//   console.log(constructor);
// }

//Decorator Factory
function Logger(logString: string) {
  console.log('LOGGER FACTORY');
  
  return function (constructor: Function) {
    console.log('LOGGER DECORATOR');
    console.log(logString);
    console.log(constructor);
  }
}

//Decorators as templates
function withTemplate(template:string, elementId:string){
  console.log('TEMPLATE FACTORY');
  
  return function (constructor: any){
    console.log('TEMPLATE DECORATOR');
    
    const el = document.getElementById(elementId);
    const p = new constructor();
    if(el){
      el.innerHTML = template;
      el.textContent = p.name;
    }
  }
}

@Logger('LOGGING - PERSON')
@withTemplate('<h1>Decorator Template</h1>', 'app')
class Person {
  name = "Albert";

  constructor() {
    console.log("Creating a person object ...");
  }
}

const person = new Person();
console.log(person);
