"use strict";
// function *createGenerator{
//     yield 1;
//     console.log("first Yield");
//     yield 2;
// }
// const gen=createGenerator();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
Object.defineProperty(exports, "__esModule", { value: true });
var Counter = /** @class */ (function () {
    function Counter() {
        this.counter = 0;
    }
    Counter.prototype[Symbol.iterator] = function () {
        var _this = this;
        return {
            next: function () {
                return { value: _this.counter++, done: _this.counter === 5 };
            }
        };
    };
    return Counter;
}());
var counter = new Counter();
try {
    for (var counter_1 = __values(counter), counter_1_1 = counter_1.next(); !counter_1_1.done; counter_1_1 = counter_1.next()) {
        var c = counter_1_1.value;
        console.log(c);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (counter_1_1 && !counter_1_1.done && (_a = counter_1.return)) _a.call(counter_1);
    }
    finally { if (e_1) throw e_1.error; }
}
