"use strict";
// 函数类型
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
// 函数参数名不需要与接口定义的名字相匹配，不再properties check范围
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
// 无需制定类型亦可，TypeScript的类型系统会推断出参数类型
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
