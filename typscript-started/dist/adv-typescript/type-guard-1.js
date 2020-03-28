"use strict";
function getSmallPets() {
    return {
        fly: function () {
            console.log("I can Fly");
        },
        layEggs: function () {
            console.log("I canLayEggs");
        }
    };
}
function isFish(pet) {
    return pet.swim !== undefined;
}
var pet = getSmallPets();
/** Without type guard */
if (pet.swim) {
    pet.swim();
}
else if (pet.fly) {
    pet.fly();
}
/** Using type predicate */
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
/** Using in operator */
function move(pet) {
    if ("swim" in pet) {
        return pet.swim();
    }
    return pet.fly();
}
move(pet);
