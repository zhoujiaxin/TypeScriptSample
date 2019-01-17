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
// Symbols
// symbol类型的值是通过Symbol构造函数创建的。
// 内置symbols，内置symbols用来表示语言内部的行为。
// Symbol.hasInstance
var sbStr = "This is a message!";
console.log(sbStr instanceof String);
sbStr.replace('is', 'are').match('^T');
var sbArray = ["a", "b", "c"];
// 迭代器与代码生成
// for..in与for..of语句
var numbers = [4, 5, 6];
for (var i in numbers) {
    console.log(i);
}
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) { /* 当目标为兼容ECMAScipt 2015的引擎时，编译器会生成相应引擎的for..of内置迭代器实现方式。 */
    var i = numbers_1[_i];
    console.log(i);
}
/// <reference path="Validation.ts" />
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
})(Validation || (Validation = {}));
/// <reference path="Validation.ts" />
var Validation;
(function (Validation) {
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
// Some samples to try
var npStrs = ["Hello", "98052", "101"];
// Validators to use
var npValidators = {};
npValidators["ZIP code"] = new Validation.ZipCodeValidator();
npValidators["Letters only"] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (var _i = 0, npStrs_1 = npStrs; _i < npStrs_1.length; _i++) {
    var s = npStrs_1[_i];
    for (var name_1 in npValidators) {
        console.log("\"" + s + "\" - " + (npValidators[name_1].isAcceptable(s) ? "matches" : "does not match") + " " + name_1);
    }
}
/**
 * @author zhoujiaxin
 * @version typescript V3.2.2
 */
function say(name) {
    return "Hello, " + name;
}
var user = "Kungeek";
document.body.innerHTML = say(user);
/**
 * @author zhoujiaxin
 * @version typescript V3.2.2
 */
// Boolean 布尔值
var isDone = false;
// Number 数字
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// String 字符串
var color = "blue"; /* 支持使用双引号( " )、单引号( ' )。 */
color = 'red';
// template strings 模板字符串
var myName = "Kungeek"; /* 反引号( ` )包围、表达式方式( ${expr} )引入。 */
var myAge = 25;
var sentenceForTemplate = "Hello, my name is " + myName + ".I'll be " + (myAge + 1) + " years old next month.";
var sentenceForSimple = "Hello, my name is " + myName + ".I'll be " + (myAge + 1) + " years old next month.";
// Array 数组
var listForSimple = [1, 2, 3]; /* 普通数组。 */
var listForGeneric = [1, 2, 3]; /* 泛型数组。 */
// Tuple 元组
var x; /* 元组类型声明。 */
// Initialize it
x = ['hello', 10]; /* 变量初始化。 */
//x = [10, 'hello'];                        /* 变量初始化失败示例。 */
console.log(x[0].substr(1)); /* 访问已知索引元素。 */
//console.log(x[1].substr(1));              /* 错误，对应类型为Number，非String。 */
// 与官网说明相反
//x[3] = 'world';                           /* 错误，Type '"world"' is not assignable to type 'undefined'. Property '3' does not exist on type '[string, number]'.*/
// console.log(x[5].toString());            /* 错误, Object is possibly 'undefined'. Property '5' does not exist on type '[string, number]'.*/
// Enum 枚举，JavaScript标准数据类型的补充
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
var c1 = Color1.Green;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Green;
var colorName;
colorName = Color2[3];
console.log(colorName); /* 输出：undefined。 */
colorName = Color2[4];
console.log(colorName); /* 输出：Blue。 */
// Any 任何类型，不希望类型检查器对这些值进行检查，而是直接让他们通过编译阶段。
var notSure = 5; /* Any类型变量声明，并Number类型赋值。 */
notSure.toFixed();
notSure = "maybe a string insteaded"; /* String类型赋值。 */
notSure = false; /* Boolean类型赋值。 */
var prettySure = 5; /* 普通类型变量声明，并Number类型赋值。。 */
// prettySure.toFixed();                    /* 编译阶段报错，Property 'toFixed' does not exist on type 'Object'。 */
var anyList = [5, false, "TEST"];
anyList[1] = true;
console.log(anyList[1]);
// Void 空类型，与Any类型相反，表示没有任务类型。
function noTypes() {
    // 无返回值，默认返回Void类型
}
// Null 和 Undefined，默认情况下null和undefined是所有类型的子类型。
var n = null;
var u = undefined;
// let undefinedNum: number = undefined;    /* 编译错误，严格模式，Type 'undefined' is not assignable to type 'number'。 */
// Never 不存在值类型，总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型，never类型是任何类型的子类型，也可以赋值给任何类型。
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 }); /* Object类型。 */
create(null); /* 空类型。 */
// create(42);                      /* 编译错误，Number类型。 */
// create("string");                /* 编译错误，String类型。 */
// create(false);                   /* 编译错误，Boolean类型。 */
// create(undefined);               /* 编译错误，undefined类型。 */
// 类型断言（参考Java显式类型转换），编译器特性，即只在编译阶段起作用，不影响运行，
var someValue = "this is a string";
var strLength = someValue.length; /* 编译通过，无语法提示。 */
var strLengthForBrackets = someValue.length; /* 尖括号写法。 */
var strLengthForAs = someValue.length; /* as声明写法。 */
/**
 * @author zhoujiaxin
 * @version typescript V3.2.2
 */
// JavaScript变量定义
var a = 10;
function f0() {
    var message = "Hello world!";
    return message;
}
function f1() {
    var a = 10;
    return function g() {
        var b = a + 1; /* 可以在其它函数内部访问相同的变量。 */
        return b;
    };
}
var g = f1();
console.log(g()); /* 输出：11。 */
// 作用域规则，*.ts 与 *.js 有所不同
// function f2(shouldInitialize: boolean) {
//     if(shouldInitialize) {
//         var x = 10;
//     }
//     return x;            /* 编译错误，Variable 'x' is used before being assigned。 */
// }
function f2(shouldInitialize) {
    if (shouldInitialize) {
        var x_1 = 10;
    }
    return x;
}
f2(true);
// 2、声明
function f3() {
    var x;
    var x;
    var x;
    var y;
    var z;
}
function f4() {
    var x;
    // let x;           /* 编译错误。 */
    var y;
    var z;
}
function f5(m) {
    var sum = 0;
    for (var i = 0; i < 5; i++) {
        var row = m[i];
        for (var i = 0; i < 5; i++) {
            sum = sum + row[i];
        }
    }
    return sum;
}
function f6(m) {
    var sum = 0;
    for (var i = 0; i < 5; i++) {
        var row = m[i];
        for (var i_1 = 0; i_1 < 5; i_1++) {
            sum = sum + row[i_1];
        }
    }
    return sum;
}
// javascript脚本
function f7() {
    for (var i = 0; i < 10; i++) {
        setTimeout(function () {
            console.log(i);
        }, 100 * i);
    }
}
function f8() {
    for (var i = 0; i < 10; i++) {
        // 立即执行函数表达式(IIFE)
        (function (i) {
            setTimeout(function () {
                console.log(i);
            }, 100 * i);
        })(i);
    }
}
// IE、Chrome浏览器上作为js脚本直接运行有所区别
function f9() {
    var _loop_1 = function (i) {
        setTimeout(function () {
            console.log(i);
        }, 100 * i);
    };
    for (var i = 0; i < 10; i++) {
        _loop_1(i);
    }
}
function f10() {
    var x = "TEST";
    // x = "CHANGE";       /* 编译错误，Cannot assign to 'x' because it is a constant.。 */
    var y = {
        name: 'Lee',
        age: 28
    };
    // y = {
    //     name : 'Wang',
    //     age : 28
    // }                    /* Cannot assign to 'y' because it is a constant。 */
    y.name = 'Wang';
}
// 混合类型
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
// 接口继承类
// 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
// 继承类，实现接口
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
// 类继承类
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
// class Image implements SelectableControl {              /* 错误，“Image”类型缺少“state”属性。 */
//     select() {}
// }
function printLabel1(labelledObj) {
    console.log(labelledObj.label);
}
var myObj1 = { size: 10, label: "Size 10 Object" };
printLabel1(myObj1);
function printLabel2(labelledObj) {
    console.log(labelledObj.label);
}
var myObj2 = { size: 10, label: "Size 10 Object" };
printLabel2(myObj2);
// 接口，可选属性
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" }); /* width属性，去除?标识，显示错误 */
var point = { x: 10, y: 20 };
// point.x = 100;          /* 错误，x为只读属性 */
// readonly OR const ?
// 属性用readonly，变量用const。
// 额外属性检查
// let wSquare = createSquare({ colour: "black" });            /* 错误属性检查 */
// 函数类型
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
// 函数参数名不需要与接口定义的名字相匹配，不再properties check范围
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
// 无需制定类型亦可，TypeScript的类型系统会推断出参数类型
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
// 可索引类型，数组定义
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
var readArray = ["Alice", "Bob"];
// readArray[2] = "Mallory";        /* 错误，函数类型被readonly修饰 */
// 类类型
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        this.currentTime = new Date();
    }
    return Clock;
}());
// 接口继承
var square = {}; /* {} as Square， */
square.color = "blue";
square.sideLength = 10;
square.sideLength = 11;
// TyepScript定义类
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
console.log(greeter.greet());
// TyepScript继承
var Animal = /** @class */ (function () {
    function Animal() {
    }
    //name: string;
    //constructor(name: string) { this.name = name;}
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
// TyepScript继承
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
// TyepScript抽象类
var AnimalY = /** @class */ (function () {
    function AnimalY() {
    }
    AnimalY.prototype.move = function () {
        console.log('roaming the earch...');
    };
    return AnimalY;
}());
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lion.prototype.makeSound = function () {
        console.log("...");
    };
    return Lion;
}(AnimalY));
var lion = new Lion();
lion.makeSound();
var Point2D = /** @class */ (function () {
    function Point2D(x, y) {
        this.x = x;
        this.y = y;
    }
    ;
    return Point2D;
}());
var point3d = { x: 1, y: 2, z: 3 };
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
// 泛型
// Java、C#等开发大型业务应用系统的语言对组件的可重用性支持良好，通过泛型，一个组件可以支持多种类型的数据
function gnIdentity1(arg) {
    return arg;
}
function gnIdentity2(arg) {
    return arg;
}
// 需要注意泛型类型约束，TypeScript类型检查器会提供校验。
function gnIdentity(arg) {
    console.log(typeof arg);
    return arg;
}
var gnRs1 = gnIdentity("Good Morning!");
var gnRs2 = gnIdentity(10);
var gnRs3 = gnIdentity(true);
var gnRs4 = gnIdentity({ a: 10, b: "message" });
// 枚举
var EnResponse;
(function (EnResponse) {
    EnResponse[EnResponse["No"] = 0] = "No";
    EnResponse[EnResponse["Yes"] = 1] = "Yes";
})(EnResponse || (EnResponse = {}));
function enGetResponseData(message, code) {
    // ...
}
enGetResponseData("Print some message!", EnResponse.Yes);
var EnShapeKind;
(function (EnShapeKind) {
    EnShapeKind[EnShapeKind["EnCircle"] = 0] = "EnCircle";
    EnShapeKind[EnShapeKind["EnSquare"] = 1] = "EnSquare";
})(EnShapeKind || (EnShapeKind = {}));
var enC = {
    kind: EnShapeKind.EnCircle,
    radius: 100,
};
// 类型推断
// 类型推断的基础是默认参数值、函数返回值或代码上下文
var tiX = 3; /* 变量x的类型被推断为数字。 这种推断发生在初始化变量和成员，设置默认参数值和决定函数返回值时。 */
// 最佳通用类型
// let zoo = [new Rhino(), new Elephant(), new Snake()];                                /* 声明 */
// let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];                      /* 推断为Animal类型。 */
// let zoo: (Rhino | Elephant | Snake)[] = [new Rhino(), new Elephant(), new Snake()];  /* 若无，推断为联合数组。 */
