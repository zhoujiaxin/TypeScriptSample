"use strict";
// 类型兼容性
var TcPerson = /** @class */ (function () {
    function TcPerson(name) {
        this.name = name;
    }
    return TcPerson;
}());
var p = new TcPerson("Kungeek"); /* 结构一直，类型检查通过。 */
// 适用
var tcX = function (a) { return 0; };
var tcY = function (b, s) { return 0; };
tcY = tcX;
// tcX = tcY;                                       /* 错误，结构不一致。 */
