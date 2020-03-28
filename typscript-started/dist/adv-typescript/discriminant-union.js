"use strict";
/**Type Guard on the common property*/
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "rectangle":
            return shape.height * shape.width;
        case "square":
            return shape.size * shape.size;
        default:
            return assertNever(shape);
    }
}
function assertNever(obj) {
    throw new Error("Unexpected Object " + obj);
}
console.log("Area of Circle ", getArea({ kind: "circle", radius: 10 }));
console.log("Area of Rectangle ", getArea({ kind: "rectangle", width: 10, height: 10 }));
console.log("Area of Square ", getArea({ kind: "square", size: 10 }));
