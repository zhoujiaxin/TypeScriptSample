"use strict";
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
