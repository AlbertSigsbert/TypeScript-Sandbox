function Logger(constructor:Function){
  console.log('Logging ...');
  console.log(constructor);
  
}

@Logger
class Person{
    name = 'Albert';

    constructor(){
        console.log('Creating a person object ...');
        
    }
}

const person = new Person();
console.log(person);
