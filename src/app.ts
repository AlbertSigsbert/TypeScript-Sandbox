//INDEX PROPERTIES
interface ErrorContainer {
  [key: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Username must start with a character",
};

//FUNCTION OVERLOADS
type Combinable = number | string;


function add(a: string, b: string):string;
function add(a: number, b:number): number;

function add(a: Combinable, b: Combinable) {
  //Type Guard (Common JS Types)
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Albert', 'Sigsbert');
console.log(result.split(''));


//OPTIONAL CHAINING
const fetchedUserData = {
    id:'u1',
    name:'James',
    job:{ title:'CEO', description: 'Owner'}
}

console.log(fetchedUserData?.job?.title);


//NULLISH COALESCISCING OPERATOR
const userInput = '';
//Fallback will be added iff userInput is null/undefined & not any other falsy value
const storedData = userInput ?? 'FALLBACK';

console.log(storedData);
