/** To detect whether the object provides implementation for [Symbol.iterator] or not. */
let str = "tet";
let array = [1, 2, 3, 4];
let obj = { name: "hello" };
let num = 12;
// console.log(typeof str[Symbol.iterator]);
// console.log(typeof array[Symbol.iterator]);
// console.log(typeof obj[Symbol.iterator]);
// console.log(typeof num[Symbol.iterator]);

/** Make Object Iterable */
interface MyIterable {
  [Symbol.iterator](): MyIterator;
}
interface MyIterator {
  next: () => IMyResult;
}
interface IMyResult {
  value: any;
  done: boolean;
}

let myArray = [1, 2, 3];
function createIterator(iterable: any[]) {
  let count = 0;
  function next() {
    return count < iterable.length
      ? { value: iterable[count++], done: false }
      : { value: undefined, done: true };
  }
  return { next };
}
let myIterator = createIterator(myArray);
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
export {};
