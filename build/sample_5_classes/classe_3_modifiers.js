"use strict";
// TyepScript继承
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
var AnimalX = /** @class */ (function () {
    // public constructor(name: string) { this.name = name; }
    function AnimalX(name) {
        this.name = name;
    }
    AnimalX.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return AnimalX;
}());
// console.log(new AnimalX('CAT').name);           /* 分别更改修饰符测试。 */
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse() {
        var _this = _super.call(this, name) || this;
        _this.weight = 98;
        return _this;
    }
    Horse.prototype.galloping = function () {
        console.log('galloping....');
    };
    return Horse;
}(AnimalX));
var horse = new Horse();
// let horse: AnimalX = new Horse();
horse.move(5);
horse.galloping();
console.log(horse.weight);
// horse.weight = 99;              /* 错误，Cannot assign to 'weight' because it is a read-only property. */
