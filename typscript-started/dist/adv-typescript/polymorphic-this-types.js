"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BasicCalculator = /** @class */ (function () {
    function BasicCalculator(currentValue) {
        if (currentValue === void 0) { currentValue = 0; }
        this.currentValue = currentValue;
    }
    BasicCalculator.prototype.getCurrentValue = function () {
        return this.currentValue;
    };
    BasicCalculator.prototype.add = function (operand) {
        this.currentValue += operand;
        return this;
    };
    BasicCalculator.prototype.multiply = function (operand) {
        this.currentValue *= operand;
        return this;
    };
    return BasicCalculator;
}());
var basicCalc = new BasicCalculator(2);
var currentValue = basicCalc
    .add(10)
    .multiply(2)
    .getCurrentValue();
console.log(currentValue);
var ScientificCalculator = /** @class */ (function (_super) {
    __extends(ScientificCalculator, _super);
    function ScientificCalculator(value) {
        if (value === void 0) { value = 0; }
        return _super.call(this, value) || this;
    }
    ScientificCalculator.prototype.sin = function () {
        this.currentValue = Math.sin(this.currentValue);
        return this;
    };
    return ScientificCalculator;
}(BasicCalculator));
var scienCalc = new ScientificCalculator();
var result = scienCalc
    .add(30)
    .sin()
    .getCurrentValue();
console.log(result);
