"use strict";
// function plunk(obj, propertyNames: string[]) {
//   return propertyNames.map(prop => obj[prop]);
// }
function plunk(obj, propertyNames) {
    return propertyNames.map(function (prop) { return obj[prop]; });
}
var car = {
    manufacturer: "Toyota",
    model: "FYX-89",
    year: 2015
};
// Manufacturer and model both are of type string.
// so we can plunk them both into a typ ed string array.
var manuAndModel = plunk(car, ["manufacturer", "model"]);
var manuAndYear = plunk(car, ["model", "year"]);
console.log(manuAndModel);
console.log(manuAndYear);
function getProperty(obj, prop) {
    return obj[prop];
}
var manu = getProperty(car, "manufacturer");
console.log(manu);
