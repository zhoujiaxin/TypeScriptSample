"use strict";
// 泛型
// Java、C#等开发大型业务应用系统的语言对组件的可重用性支持良好，通过泛型，一个组件可以支持多种类型的数据
function gnIdentity1(arg) {
    return arg;
}
function gnIdentity2(arg) {
    return arg;
}
// 需要注意泛型类型约束，TypeScript类型检查器会提供校验。
function gnIdentity(arg) {
    console.log(typeof arg);
    return arg;
}
var gnRs1 = gnIdentity("Good Morning!");
var gnRs2 = gnIdentity(10);
var gnRs3 = gnIdentity(true);
var gnRs4 = gnIdentity({ a: 10, b: "message" });
