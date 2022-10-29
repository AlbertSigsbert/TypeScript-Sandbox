//TYPE CASTING

//1st Method
// const userInput = <HTMLInputElement>document.getElementById('user-input')!;

// 2nd Method
const userInput = document.getElementById('user-input')! as HTMLInputElement;

userInput.value = 'Hello World!';