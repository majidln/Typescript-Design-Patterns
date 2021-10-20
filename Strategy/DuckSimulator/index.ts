interface IFlyBehavior {
    fly: () => void;
}

interface IQuackBehavior {
    quack: () => void;
}

class FlyWithWings implements IFlyBehavior {
    public fly() {
        console.log('I can fly with Wings');
    }
}

class FlyNoWay implements IFlyBehavior {
    public fly() {
        console.log('I can not fly')
    }
}

class Quack implements IQuackBehavior {
    public quack() {
        console.log('Quack')
    }
}

class Squeak implements IQuackBehavior {
    public quack() {
        console.log('Squeak');
    }
}

class MuteQuack implements IQuackBehavior {
    public quack() {
        console.log('I can not quack');
    }
}

class Duck {
    private flayBehavior: IFlyBehavior;
    private quackBehavior: IQuackBehavior;

    constructor(fb: IFlyBehavior, qb: IQuackBehavior) {
        this.flayBehavior = fb;
        this.quackBehavior = qb;
    }

    public setFlyBehavior(fb: IFlyBehavior) {
        this.flayBehavior = fb;
    }

    public setQuackBehavior(qb: IQuackBehavior) {
        this.quackBehavior = qb;
    }

    public fly() {
        this.flayBehavior.fly();
    }

    public quack() {
        this.quackBehavior.quack();
    }
}

const modelDuck = new Duck(new FlyWithWings(), new Quack());
modelDuck.fly();
modelDuck.quack();

const noFlayDuck = new FlyNoWay();
modelDuck.setFlyBehavior(noFlayDuck);
modelDuck.fly();