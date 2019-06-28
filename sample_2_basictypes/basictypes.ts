/**
 * @author zhoujiaxin
 * @version typescript V3.2.2
 */
// Boolean 布尔值
let isDone: boolean = false;

// Number 数字
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
    
// String 字符串
let color: string = "blue";                 /* 支持使用双引号( " )、单引号( ' )。 */
color = 'red';

// template strings 模板字符串
let myName: string = 'Jack';             /* 反引号( ` )包围、表达式方式( ${expr} )引入。 */
let myAge: number = 25;
let sentenceForTemplate: string = `Hello, my name is ${myName}.I'll be ${myAge+1} years old next month.`;
let sentenceForSimple: string = "Hello, my name is " + myName + ".I'll be " + (myAge + 1) + " years old next month.";

// Array 数组
let listForSimple: number[] = [1, 2, 3];            /* 普通数组。 */
let listForGeneric : Array<number> = [1, 2, 3];     /* 泛型数组。 */

// Tuple 元组
let x: [string, number];                    /* 元组类型声明。 */
// Initialize it
x = ['hello', 10];                          /* 变量初始化。 */
//x = [10, 'hello'];                        /* 变量初始化失败示例。 */
console.log(x[0].substr(1));                /* 访问已知索引元素。 */
//console.log(x[1].substr(1));              /* 错误，对应类型为Number，非String。 */
// 与官网说明相反
//x[3] = 'world';                           /* 错误，Type '"world"' is not assignable to type 'undefined'. Property '3' does not exist on type '[string, number]'.*/
// console.log(x[5].toString());            /* 错误, Object is possibly 'undefined'. Property '5' does not exist on type '[string, number]'.*/

// Enum 枚举，JavaScript标准数据类型的补充
enum Color1 {Red, Green, Blue}
let c1: Color1 = Color1.Green;

enum Color2 {Red = 1, Green = 2, Blue = 4}
let c2: Color2 = Color2.Green;

let colorName: string;
colorName = Color2[3];
console.log(colorName);         /* 输出：undefined。 */
colorName = Color2[4];
console.log(colorName);         /* 输出：Blue。 */

// Any 任何类型，不希望类型检查器对这些值进行检查，而是直接让他们通过编译阶段。
let notSure: any = 5;                       /* Any类型变量声明，并Number类型赋值。 */
notSure.toFixed();
notSure = "maybe a string insteaded";       /* String类型赋值。 */
notSure = false;                            /* Boolean类型赋值。 */ 

let prettySure: Object = 5;                 /* 普通类型变量声明，并Number类型赋值。。 */
// prettySure.toFixed();                    /* 编译阶段报错，Property 'toFixed' does not exist on type 'Object'。 */

let anyList: any[] = [5, false, "TEST"];
anyList[1] = true;
console.log(anyList[1]);

// Void 空类型，与Any类型相反，表示没有任务类型。
function noTypes(): void {
    // 无返回值，默认返回Void类型
}

// Null 和 Undefined，默认情况下null和undefined是所有类型的子类型。
let n: null = null;
let u: undefined = undefined;
// let undefinedNum: number = undefined;    /* 编译错误，严格模式，Type 'undefined' is not assignable to type 'number'。 */

// Never 不存在值类型，总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型，never类型是任何类型的子类型，也可以赋值给任何类型。
function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error("Something failed");
}

function infiniteLoop(): never {
    while (true) {
    }
}

// Object 非原始类型
declare function create(o: object | null): void;
create({ prop: 0 });                /* Object类型。 */
create(null);                       /* 空类型。 */
// create(42);                      /* 编译错误，Number类型。 */
// create("string");                /* 编译错误，String类型。 */
// create(false);                   /* 编译错误，Boolean类型。 */
// create(undefined);               /* 编译错误，undefined类型。 */

// 类型断言（参考Java显式类型转换），编译器特性，即只在编译阶段起作用，不影响运行，
let someValue: any = "this is a string";
let strLength: number = someValue.length;                           /* 编译通过，无语法提示。 */
let strLengthForBrackets: number = (<string>someValue).length;      /* 尖括号写法。 */
let strLengthForAs: number = (someValue as string).length;          /* as声明写法。 */
