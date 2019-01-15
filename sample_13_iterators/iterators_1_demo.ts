
// 迭代器与代码生成

// for..in与for..of语句

let numbers = [4, 5, 6];

for (let i in numbers) {
    console.log(i);
}

for (let i of numbers) {            /* 当目标为兼容ECMAScipt 2015的引擎时，编译器会生成相应引擎的for..of内置迭代器实现方式。 */
    console.log(i);
}