
// TyepScript抽象类

abstract class AnimalY {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}

class Lion extends AnimalY {
    makeSound(): void {
        console.log("...");
    }
}

let lion = new Lion();
lion.makeSound();