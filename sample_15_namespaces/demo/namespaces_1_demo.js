
// 命名空间

var simpleNP = (function(){})();

var simpleNP1 = (function(){

    // 私有属性
    var _pluginName = "myPlugin";
    // 私有方法
    function _print() {
        var horse = new Animal("Young horse");
        horse.eat();
    }
    // 类定义
    function Animal(name) {
        this.name = name;
        this.sleep = function() {
            console.log(this.name + " sleeping...");
        }
    }
    Animal.prototype.eat = function(){
        console.log(this.name + " eating...");
    }

    // 外部适用对象注册
    var __NP = {};

    __NP.model = {};
    __NP.model.Animal = Animal;

    __NP.util = {};
    __NP.util.print = function() {
        _print();
    }

    return __NP;
})();

console.log(simpleNP1.name);                              /* 访问公共属性。 */
simpleNP1.util.print();                                   /* 访问公共方法。 */
var horse = new simpleNP1.model.Animal("Old horse");      /* 访问公共自定义类。 */
horse.sleep();
// console.log(simpleNP1._pluginName);                    /* 访问私有属性，undefined */
// simpleNP1._print();                                    /* 访问私有方法，simpleNP1._print is not a function */
