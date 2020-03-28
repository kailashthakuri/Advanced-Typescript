"use strict";
/** Using typeof type  guard */
function paddingLeft(value, padding) {
    if (typeof padding === "string") {
        return padding + value;
    }
    if (typeof padding === "number") {
        return Array(padding).join(" ") + value;
    }
    throw new Error("Expected number or string . Found  " + padding + ".");
}
/** Using type predicate */
function isNumber(value) {
    return typeof value === "number";
}
function isString(value) {
    return typeof value === "string";
}
function paddingLeftUsingPredicate(value, padding) {
    if (isNumber(padding)) {
        return Array(padding).join(" ") + value;
    }
    if (isString(padding)) {
        return padding + value;
    }
    throw new Error("Expected number or string . Got " + padding + ".");
}
console.log(paddingLeft("Kailash", 7));
console.log(paddingLeftUsingPredicate("Ashok", 5));
