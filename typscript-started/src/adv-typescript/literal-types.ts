/** String literal Types */
type Easing = "ease-out" | "ease-in" | "ease-in-out";

class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing == "ease-in") {
    } else if (easing == "ease-out") {
    } else if (easing == "ease-in-out") {
    } else {
    }
  }
}
const button = new UIElement();
button.animate(0, 0, "ease-in");

// String literals Types can be used in the same way to distinguish overloads.
// Type checked call to the createElement Function.
function createElement(tagName: "imag"): HTMLImageElement;
function createElement(tagName: "input"): HTMLInputElement;
function createElement(tagName: string): Element {
  return new Element();
}

/** Number literal Types */
type rollDice = 1 | 2 | 3 | 4 | 5 | 6;
