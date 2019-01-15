"use strict";
// 函数
// 函数是JavaScript应用程序的基础
/*

// JavaScript普通函数。

function add(x, y) {
    return x + y;
}
*/
// TypeScript函数定义
function fnAdd1(x, y) {
    return x + y;
}
var fnAdd2 = function (x, y) { return x + y; }; /* 在赋值语句的一边指定了类型但是另一边没有类型的话，TypeScript编译器会自动识别出类型。（函数类型推断） */
var fnAdd3; /* 完整函数类型，函数类型包含两部分：参数类型和返回值类型。*/
fnAdd2 = function (x, y) { return x + y; };
// fnBuildName1、fnBuildName2编译后的脚本其实是一样的
// 必要参数、可选参数与默认参数
function fnBuildName1(firstName, lastName) {
    return firstName + " " + lastName;
}
// let fn1rs1 = fnBuildName1("Bob");                              /* 错误， Expected 2 arguments, but got 1. */
// let fn1rs2 = fnBuildName1("Bob", "Adams", "Sr.");              /* 错误， Expected 2 arguments, but got 3.  */
var fn1rs3 = fnBuildName1("Bob", "Adams"); /* 正确 */
function fnBuildName2(firstName, lastName) {
    return firstName + " " + lastName;
}
var fn2rs1 = fnBuildName2("Bob"); /* 正确， 参数可选，无传参默认值为`undefined`。 */
// let fn2rs2 = fnBuildName2("Bob", "Adams", "Sr.");              /* 错误， Expected 1-2 arguments, but got 3.  */
var fn2rs3 = fnBuildName2("Bob", "Adams"); /* 正确 */
function fnBuildName3(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" "); /*剩余参数会被当做个数不限的可选参数。 */
}
var employeeName = fnBuildName3("Joseph", "Samuel", "Lucas", "MacKinzie");
function fnBuildName(x) {
    if (typeof x == 'number') {
        return 1;
    }
    else if (typeof x == 'string') {
        return { a: 10, b: "TEST" };
    }
    return null;
}
