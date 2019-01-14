
// JavaScript继承(原型链继承、构造继承、实例继承、拷贝继承、组合继承、寄生组合继承)

// 参考 https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance

function Animal() {}

Animal.prototype.move = function (distanceInMeters) {
    console.log('Animal moved ' + distanceInMeters + 'm.');
}


// 原型链继承
function Dog () {}

Dog.prototype = new Animal();
Dog.prototype.bark = function() {
    console.log('Woof! Woof!');
}


var dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

// 构造继承

// function Cat() {
//     Animal.call(this);
//     this.miaow = function() {
//         console.log('Miaow! Miaow!');
//     }
// }

// var cat = new Cat();
// cat.miaow();
// cat.move(5);
// cat.miaow();
