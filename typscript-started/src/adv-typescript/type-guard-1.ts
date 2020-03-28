interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

function getSmallPets(): Fish | Bird {
  return {
    fly() {
      console.log("I can Fly");
    },
    layEggs() {
      console.log("I canLayEggs");
    }
  };
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
const pet = getSmallPets();
/** Without type guard */
if ((pet as Fish).swim) {
  (pet as Fish).swim();
} else if ((pet as Bird).fly) {
  (pet as Bird).fly();
}

/** Using type predicate */
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

/** Using in operator */
function move(pet: Fish | Bird) {
  if ("swim" in pet) {
    return pet.swim();
  }
  return pet.fly();
}
move(pet);





