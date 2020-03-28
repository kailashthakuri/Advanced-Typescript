/** The Discirminant
 *  Types that have commmon singleton property "kind"
 */
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  height: number;
  width: number;
}

interface Triangle {
  kind: "triangle";
  base: number;
  height: number;
}
/** Union
 * Union of those types.
 */
type Shape = Circle | Square | Rectangle;

/**Type Guard on the common property*/

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.height * shape.width;
    case "square":
      return shape.size * shape.size;
    default:
      return assertNever(shape);
  }
}

function assertNever(obj: never): never {
  throw new Error("Unexpected Object " + obj);
}

console.log("Area of Circle ", getArea({ kind: "circle", radius: 10 }));
console.log(
  "Area of Rectangle ",
  getArea({ kind: "rectangle", width: 10, height: 10 })
);
console.log("Area of Square ", getArea({ kind: "square", size: 10 }));
