//TS auto object inferencing (Best option)
// const person = {
//     name: 'John',
//     age: 24
// };

// console.log(person.name);

//Custom object inferencing
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'John',
//     age: 24
// };

// console.log(person.name);


//ENUMS

enum Role { ADMIN, AUTHOR, READ_ONLY};

const person = {
    name: 'John',
    age: 24,
    role: Role.ADMIN
};

if (person.role === Role.ADMIN) {
    console.log('Is Admin');
    
}
