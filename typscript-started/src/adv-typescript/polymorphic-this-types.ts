class BasicCalculator {
  constructor(protected currentValue: number = 0) {}
  getCurrentValue() {
    return this.currentValue;
  }
  add(operand: number) {
    this.currentValue += operand;
    return this;
  }
  multiply(operand: number) {
    this.currentValue *= operand;
    return this;
  }
}

const basicCalc = new BasicCalculator(2);
let currentValue = basicCalc
  .add(10)
  .multiply(2)
  .getCurrentValue();
console.log(currentValue);

class ScientificCalculator extends BasicCalculator {
  constructor(value = 0) {
    super(value);
  }

  sin() {
    this.currentValue = Math.sin(this.currentValue);
    return this;
  }
}

const scienCalc = new ScientificCalculator();
const result = scienCalc
  .add(30)
  .sin()
  .getCurrentValue();
console.log(result);
