"use strict";
// 类型推断
// 类型推断的基础是默认参数值、函数返回值或代码上下文
var tiX = 3; /* 变量x的类型被推断为数字。 这种推断发生在初始化变量和成员，设置默认参数值和决定函数返回值时。 */
// 最佳通用类型
// let zoo = [new Rhino(), new Elephant(), new Snake()];                                /* 声明 */
// let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];                      /* 推断为Animal类型。 */
// let zoo: (Rhino | Elephant | Snake)[] = [new Rhino(), new Elephant(), new Snake()];  /* 若无，推断为联合数组。 */
