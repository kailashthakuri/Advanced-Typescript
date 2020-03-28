"use strict";
// let person = {
//   name: "kailash",
//   age: 23
// };
// person[Symbol.iterator] = function(): Iterator<string> {
//   const keys = Object.keys(person);
//   let count = 0;
//   let done = false;
//   let next = (): IteratorResult<string> => {
//     if (count >= keys.length) {
//       done = true;
//     }
//     return { value: this[keys[count++]], done };
//   };
//   return { next };
// };
// for (let p of person) {
//   console.log(p);
// }
