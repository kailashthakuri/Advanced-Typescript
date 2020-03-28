// function plunk(obj, propertyNames: string[]) {
//   return propertyNames.map(prop => obj[prop]);
// }
function plunk<T, K extends keyof T>(obj: T, propertyNames: K[]): T[K][] {
  return propertyNames.map(prop => obj[prop]);
}

interface Car {
  manufacturer: string;
  model: string;
  year: number;
}

const car: Car = {
  manufacturer: "Toyota",
  model: "FYX-89",
  year: 2015
};

// Manufacturer and model both are of type string.
// so we can plunk them both into a typ ed string array.
const manuAndModel: string[] = plunk(car, ["manufacturer", "model"]);
const manuAndYear: (string | number)[] = plunk(car, ["model", "year"]);

console.log(manuAndModel);
console.log(manuAndYear);

function getProperty<T, K extends keyof T>(obj: T, prop: K): T[K] {
  return obj[prop];
}
const manu = getProperty(car, "manufacturer");
console.log(manu);
