"use strict";
// declare function f<T extends boolean>(t: T): T extends true ? string : number;
// let x = f(Math.random() > 0.5); // number | string
function identity(x) {
    return x.toString();
}
console.log(typeof identity);
var Test = /** @class */ (function () {
    function Test() {
    }
    return Test;
}());
