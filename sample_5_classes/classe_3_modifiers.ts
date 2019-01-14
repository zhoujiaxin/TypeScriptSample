
// TyepScript继承

class AnimalX {
    // public name: string;
    // protected name: string;
    private name: string;
    // public constructor(name: string) { this.name = name; }
    constructor(name: string) { this.name = name; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

// console.log(new AnimalX('CAT').name);           /* 分别更改修饰符测试。 */

class Horse extends AnimalX {
    readonly weight: number = 98;
    constructor() { super(name);}
    public galloping() {
        console.log('galloping....');
    }
}

let horse: Horse = new Horse();
// let horse: AnimalX = new Horse();
horse.move(5);
horse.galloping();
console.log(horse.weight);
// horse.weight = 99;              /* 错误，Cannot assign to 'weight' because it is a read-only property. */