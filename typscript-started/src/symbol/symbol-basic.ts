let s1 = Symbol("First Symbol");
let s2 = Symbol();
console.log(s1 == s2);
/** Symbol Registry */
let s4 = Symbol.for("RegSymbol");
let s5 = Symbol.for("RegSymbol");
let s6 = Symbol.for("NextRegSymbol");
console.log(s4 == s5);
console.log(s6 == s5);
console.log(Symbol.keyFor(s5));

let fname = Symbol();
let person = {
  [fname]: "kailash"
};
console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));

export {};