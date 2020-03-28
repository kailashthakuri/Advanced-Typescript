"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var s1 = Symbol("First Symbol");
var s2 = Symbol();
console.log(s1 == s2);
/** Symbol Registry */
var s4 = Symbol.for("RegSymbol");
var s5 = Symbol.for("RegSymbol");
var s6 = Symbol.for("NextRegSymbol");
console.log(s4 == s5);
console.log(s6 == s5);
console.log(Symbol.keyFor(s5));
var fname = Symbol();
var person = (_a = {},
    _a[fname] = "kailash",
    _a);
console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));
