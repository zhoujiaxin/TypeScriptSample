/**
 * @author zhoujiaxin
 * @version typescript V3.2.2
 */

// JavaScript变量定义
var a = 10;

function f0() {
    var message = "Hello world!";
    return message;
}

function f1() {
    var a = 10;
    return function g() {
        var b = a + 1;      /* 可以在其它函数内部访问相同的变量。 */
        return b;
    }
}

var g = f1();
console.log(g());           /* 输出：11。 */



// 作用域规则，*.ts 与 *.js 有所不同

// function f2(shouldInitialize: boolean) {
//     if(shouldInitialize) {
































































































































































































































































































































































































































//         var x = 10;
//     }
//     return x;            /* 编译错误，Variable 'x' is used before being assigned。 */
// }

function f2(shouldInitialize: boolean) {
    if(shouldInitialize) {
        let x = 10;
    }
    return x;
}

f2(true);

// 2、声明

function f3() {
    var x;
    var x;
    var x;
    var y: String;
    var z: string;
}

function f4() {
    let x;
    // let x;           /* 重定义，编译错误。 */
    let y: String;
    let z: string;
}

// 【示例】变量屏蔽对比(var)
function f5(m: number[][]) {
    var sum = 0;
    for (var i = 0; i < 5; i++) {
        var row = m[i];
        for (var i = 0; i < 5; i++) {
            sum = sum + row[i];
            
        }
    }
    return sum;
}

// 【示例】变量屏蔽对比(let)
function f6(m: number[][]) {
    let sum = 0;
    for (let i = 0; i < 5; i++) {
        let row = m[i];
        for (let i = 0; i < 5; i++) {
            sum = sum + row[i];
            
        }
    }
    return sum;
}

// javascript脚本
function f7() {
    for (var i = 0; i < 10; i++) {
        setTimeout(function() {
            console.log(i);
        }, 100 * i);
    }
}

function f8() {
    for (var i = 0; i < 10; i++) {
        // 立即执行函数表达式(IIFE)
        (function(i){
            setTimeout(function() {
                console.log(i);
            }, 100 * i);
        })(i)
    }
}

// IE、Chrome浏览器上作为js脚本直接运行有所区别
// 引用
function f9() {
    for (let i = 0; i < 10; i++) {
        setTimeout(function() {
            console.log(i);
        }, 100 * i);
    }
}

function f10() {
    const x:string = "TEST";
    // x = "CHANGE";       /* 编译错误，Cannot assign to 'x' because it is a constant.。 */

    const y = {
        name : 'Lee',
        age : 28
    }

    // y = {
    //     name : 'Wang',
    //     age : 28
    // }                    /* Cannot assign to 'y' because it is a constant。 */

    y.name = 'Wang';
}