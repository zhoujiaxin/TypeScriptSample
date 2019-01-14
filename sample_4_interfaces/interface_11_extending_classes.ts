
// 接口继承类

// 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。

class Control {
    private state: any;
}

// 接口继承类
interface SelectableControl extends Control {
    select(): void;
}

// 继承类，实现接口
class Button extends Control implements SelectableControl {
    select() {}
}

// 类继承类
class TextBox extends Control {
    select() {}
}

// class Image implements SelectableControl {              /* 错误，“Image”类型缺少“state”属性。 */
//     select() {}
// }
