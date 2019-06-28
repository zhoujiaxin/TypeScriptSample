
// 类型兼容性

// TypeScript里的类型兼容性是基于结构子类型的。 结构类型是一种只使用其成员来描述类型的方式。 它正好与名义（nominal）类型形成对比。


interface TcNamed {
    name: string;
}

class TcPerson {
    name: string;
    constructor(name: string) {this.name = name}
}

let p: TcNamed = new TcPerson("Jack");           /* 结构一直，类型检查通过。 */

// 适用

let tcX = (a: number) => 0;
let tcY = (b: number, s: string) => 0;

tcY = tcX;
// tcX = tcY;                                       /* 错误，结构不一致。 */


