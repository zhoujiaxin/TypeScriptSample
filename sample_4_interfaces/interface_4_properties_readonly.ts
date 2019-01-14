interface Point {
    readonly x: number;
    readonly y: number;
}

let point: Point = {x: 10, y: 20};

// point.x = 100;          /* 错误，x为只读属性 */


// readonly OR const ?

// 属性用readonly，变量用const。