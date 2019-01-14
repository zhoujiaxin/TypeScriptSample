
// Javascript没有类，传统的JavaScript程序使用函数和基于原型的继承来创建可复用的组件

var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());

var greeter = new Greeter("world");
console.log(greeter.greet());
