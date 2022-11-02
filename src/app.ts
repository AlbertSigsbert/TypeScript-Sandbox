//Generic Types
// const names: Array<string> = ["James", "Jackson"];

//Generic fns
// function merge<T,U>(objA: T, objB: U){
//   return Object.assign(objA,objB);
// }

// const mergedObj = merge({name:'John'}, {age:20});


// Generic Constraints
function merge<T extends object,U extends object>(objA: T, objB: U){
  return Object.assign(objA,objB);
}

const mergedObj = merge({name:'John', hobbies:['football', 'movies']}, {age:20});
console.log(mergedObj);




