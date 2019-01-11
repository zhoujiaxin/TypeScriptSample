// Boolean 布尔值
let isDone: boolean = false;

// Number 数字
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String 字符串
let color: string = "blue";     /* 支持使用双引号( " )、单引号( ' )。 */
color = 'red';

// template strings 模板字符串
let myName: string = `Kungeek`; /* 反引号( ` )包围、表达式方式( ${expr} )引入。 */
let myAge: number = 25;
let sentenceForTemplate: string = `Hello, my name is ${myName}.I'll be ${myAge+1} years old next month.`;
let sentenceForSimple: string = "Hello, my name is " + myName + ".I'll be " + (myAge + 1) + " years old next month.";

// Array 数组
let listForSimple: number[] = [1, 2, 3];            /* 普通数组。 */
let listForGeneric : Array<number> = [1, 2, 3];     /* 泛型数组。 */

// Tuple 元组
let x: [string, number];        /* 元组类型声明。 */
// Initialize it
x = ['hello', 10];              /* 变量初始化。 */
//x = [10, 'hello'];            /* 变量初始化失败示例。 */
console.log(x[0].substr(1));    /* 访问已知索引元素。 */
//console.log(x[1].substr(1));  /* 错误，对应类型为Number，非String。 */
// 与官网说明相反
//x[3] = 'world';               /* 错误，Type '"world"' is not assignable to type 'undefined'. Property '3' does not exist on type '[string, number]'.*/
//console.log(x[5].toString()); /* 错误, Object is possibly 'undefined'. Property '5' does not exist on type '[string, number]'.*/

// Enum 枚举，JavaScript标准数据类型的补充
enum Color1 {Red, Green, Blue}
let c1: Color1 = Color1.Green;

enum Color2 {Red = 1, Green = 2, Blue = 4}
let c2: Color2 = Color2.Green;