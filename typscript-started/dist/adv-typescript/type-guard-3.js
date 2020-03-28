"use strict";
/** Using  instaceof  type guard */
var StringPadder = /** @class */ (function () {
    function StringPadder(padding) {
        this.padding = padding;
    }
    StringPadder.prototype.getStringPadding = function (value) {
        return this.padding + value;
    };
    return StringPadder;
}());
var SpaceRepeatingPadder = /** @class */ (function () {
    function SpaceRepeatingPadder(padding) {
        this.padding = padding;
    }
    SpaceRepeatingPadder.prototype.getStringPadding = function (value) {
        return Array(this.padding).join(" ") + value;
    };
    return SpaceRepeatingPadder;
}());
function getPadder() {
    return Math.random() > 0.5
        ? new StringPadder("   ")
        : new SpaceRepeatingPadder(5);
}
var padder = getPadder();
if (padder instanceof StringPadder) {
    console.log(padder.getStringPadding("kailash"));
}
if (padder instanceof SpaceRepeatingPadder) {
    console.log(padder.getStringPadding("Ashok"));
}
