
// Symbols

// symbol类型的值是通过Symbol构造函数创建的。基础类型不能new

// 内置symbols，内置symbols用来表示语言内部的行为。

// Symbol.hasInstance

let sbStr: any = "This is a message!";
console.log(sbStr instanceof String);

(<String>sbStr).replace('is', 'are').match('^T');

let sbArray: string[] = ["a", "b", "c"];
