
// 函数

// 函数是JavaScript应用程序的基础

/*

// JavaScript普通函数。

function add(x, y) {
    return x + y;
}
*/

// TypeScript函数定义

function fnAdd1(x: number, y: number): number {
    return x + y;
}

let fnAdd2 = function (x: number, y: number): number { return x + y; };             /* 在赋值语句的一边指定了类型但是另一边没有类型的话，TypeScript编译器会自动识别出类型。（函数类型推断） */

let fnAdd3: (x: number, y: number) => number;                                       /* 完整函数类型，函数类型包含两部分：参数类型和返回值类型。*/

fnAdd2 = function (x: number, y: number): number { return x + y; };


// fnBuildName1、fnBuildName2编译后的脚本其实是一样的

// 必要参数、可选参数与默认参数
function fnBuildName1(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

// let fn1rs1 = fnBuildName1("Bob");                              /* 错误， Expected 2 arguments, but got 1. */
// let fn1rs2 = fnBuildName1("Bob", "Adams", "Sr.");              /* 错误， Expected 2 arguments, but got 3.  */
let fn1rs3 = fnBuildName1("Bob", "Adams");                        /* 正确 */

function fnBuildName2(firstName: string, lastName?: string) {
    return firstName + " " + lastName;
}

let fn2rs1 = fnBuildName2("Bob");                                 /* 正确， 参数可选，无传参默认值为`undefined`。 */
// let fn2rs2 = fnBuildName2("Bob", "Adams", "Sr.");              /* 错误， Expected 1-2 arguments, but got 3.  */
let fn2rs3 = fnBuildName2("Bob", "Adams");                        /* 正确 */


function fnBuildName3(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");                 /*剩余参数会被当做个数不限的可选参数。 */
}

let employeeName = fnBuildName3("Joseph", "Samuel", "Lucas", "MacKinzie");

// 函数重载，注意声明参数类型、返回类型，注意顺序

// 重载的fnBuildName函数在调用的时候会进行正确的类型检查。

// 为了让编译器能够选择正确的检查类型，它与JavaScript里的处理流程相似。 它查找重载列表，尝试使用第一个重载定义。 如果匹配的话就使用这个。 因此，在定义重载的时候，一定要把最精确的定义放在最前面。

// function fnBuildName(x: any): any 并不是重载列表的一部分
function fnBuildName(x: number): number;
function fnBuildName(x: string): {a: number; b: string;};
function fnBuildName(x: {y: boolean, z: number[]}): void;
function fnBuildName(x: any): any {
    if(typeof x == 'number') {
        return 1;
    } else if (typeof x == 'string') {
        return {a: 10, b: "TEST"}
    }
    return null;
}

