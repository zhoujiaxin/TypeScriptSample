
// 可索引类型，数组定义

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

interface NumberDictionary {
    [index: string]: number;
    length: number;                 /* 可以，length是number类型 */
    // name: string                 /* 错误，`name`的类型与索引类型返回值的类型不匹配 */
}

interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let readArray: ReadonlyStringArray = ["Alice", "Bob"];
// readArray[2] = "Mallory";        /* 错误，函数类型被readonly修饰 */

