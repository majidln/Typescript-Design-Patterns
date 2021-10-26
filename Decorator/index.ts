abstract class Beverage {
    private description = "Unknown description";

    public setDescription(desc) {
        this.description = desc
    }

    public getDescription() {
        return this.description;
    }

    public abstract cost();
}

abstract class CondimentsDecorator extends Beverage{
    public abstract getDescription();
}

class Espresso extends Beverage {
    constructor() {
        super();

        super.setDescription("Espresso");
    }

    cost() {
        return 1.99;
    }
}

class HouseBlend extends Beverage {
    constructor() {
        super();
        
        super.setDescription("House Blend Coffee");
    }

    cost() {
        return .89;
    }
}

class Mocha extends CondimentsDecorator {
    _beverage: Beverage;

    constructor(b: Beverage) {
        super();

        this._beverage = b;
    }

    public getDescription() {
        return this._beverage.getDescription() + ", Mocha";
    }

    cost() {
        return this._beverage.cost() + .20;
    }
}

class Soy extends CondimentsDecorator {
    _beverage: Beverage;

    constructor(b: Beverage) {
        super();

        this._beverage = b;
    }

    public getDescription() {
        return this._beverage.getDescription() + ", Soy";
    }

    cost() {
        return this._beverage.cost() + .25;
    }
}

class Whip extends CondimentsDecorator {
    _beverage: Beverage;

    constructor(b: Beverage) {
        super();

        this._beverage = b;
    }

    public getDescription() {
        return this._beverage.getDescription() + ", Whip";
    }

    cost() {
        return this._beverage.cost() + .28;
    }
}

const beverage = new Espresso();
console.log(beverage.getDescription() + " $"+beverage.cost());

let beverage2 = new HouseBlend();
beverage2 = new Mocha(beverage2);
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);
console.log(beverage2.getDescription() + " $" + beverage2.cost());