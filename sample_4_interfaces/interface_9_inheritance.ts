
// 接口继承

interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};                /* {} as Square， */
square.color = "blue";
square.sideLength = 10;
square.sideLength = 11;