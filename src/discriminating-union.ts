//DISCRIMINATING UNION
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function useAnimal(animal: Animal) {
  let speed;

  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
    default:
      break;
  }

  console.log("Animal Moving at Speed: " + speed);
}

useAnimal({type: 'bird', flyingSpeed:120})
useAnimal({type: 'horse', runningSpeed:80})