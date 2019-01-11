"use strict";
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
//x = [10, 'hello'];            /* 变量初始化失败示例。 */
console.log(x[0].substr(1)); /* 访问已知索引元素。 */
//console.log(x[1].substr(1));  /* 错误，对应类型为Number，非String。 */
// 与官网说明相反
//x[3] = 'world';               /* 错误，Type '"world"' is not assignable to type 'undefined'. Property '3' does not exist on type '[string, number]'.*/
//console.log(x[5].toString()); /* 错误, Object is possibly 'undefined'. Property '5' does not exist on type '[string, number]'.*/
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
