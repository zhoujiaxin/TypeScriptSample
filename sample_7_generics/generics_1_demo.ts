
// 泛型

// Java、C#等开发大型业务应用系统的语言对组件的可重用性支持良好，通过泛型，一个组件可以支持多种类型的数据


function gnIdentity1(arg: number): number {
    return arg;
}

function gnIdentity2(arg: any): any {       /* 可行，但是丢失了一些规则，如传入的类型与返回的类型应该是相同的。 */
    return arg;
}

// 需要注意泛型类型约束，TypeScript类型检查器会提供校验。

function gnIdentity<T>(arg: T): T {         /* 参考Java。 */
    console.log(typeof arg);
    return arg;
}

let gnRs1 = gnIdentity("Good Morning!");
let gnRs2 = gnIdentity(10);
let gnRs3 = gnIdentity(true);
let gnRs4 = gnIdentity({ a: 10, b: "message" });
