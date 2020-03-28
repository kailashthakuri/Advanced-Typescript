"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** To detect whether the object provides implementation for [Symbol.iterator] or not. */
var str = "tet";
var array = [1, 2, 3, 4];
var obj = { name: "hello" };
var num = 12;
var myArray = [1, 2, 3];
function createIterator(iterable) {
    var count = 0;
    function next() {
        return count < iterable.length
            ? { value: iterable[count++], done: false }
            : { value: undefined, done: true };
    }
    return { next: next };
}
var myIterator = createIterator(myArray);
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
